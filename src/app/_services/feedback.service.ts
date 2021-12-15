import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feedback } from '../models/feedback';
import { getFeedback } from './feedback-data';
import { sortBy } from './utils';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  feedbackChange = new Subject<any>();
  private feedbacks!: Feedback[];
  constructor() {}

  fetchAvailableFeedback() {
    getFeedback()
      .then((res: any) => {
        let resSorted = sortBy(res, 'votes');
        this.feedbackChange.next(resSorted);
        this.feedbacks = resSorted;
      })
      .catch((err) => {
        this.feedbackChange.error(err);
      });
  }

  getAllFeedback() {
    return this.feedbacks;
  }

  addFeedback(obj: Feedback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.feedbacks = [...this.feedbacks, obj];
        this.feedbackChange.next(this.feedbacks);
        return resolve({ status: 'success' });
      }, 500);
    });
  }

  editFeedback(feedId: string, obj: any) {
    const updateFeedbacks = this.feedbacks.map((el) => {
      if (el.id === feedId) {
        el = { ...el, ...obj };
      }

      return el;
    });

    this.feedbacks = updateFeedbacks;
  }

  deleteFeedback(feedId: string) {
    const updateFeedbacks = this.feedbacks.filter((el) => {
      return el.id !== feedId;
    });

    this.feedbacks = updateFeedbacks;
  }

  addReplyToComment(feedId: string, parentId: string, content: string) {
    let newComment: any = this.generateComment(content);

    const currFeed = this.feedbacks.find((el) => el.id === feedId);

    const comments = currFeed?.comments || [];

    if (comments.length === 0) {
      comments.push(newComment);
    } else {
      this.insertDeepComment(comments, parentId, newComment);
    }

    let newFeedbacks = this.feedbacks.map((el) => {
      if (el.id === feedId) {
        el.comments = comments;
      }
      return el;
    });

    this.feedbackChange.next(newFeedbacks);
  }

  private insertDeepComment(arr: any[], parentId: String, newComment: any) {
    let found = arr.find((node) => node.id === parentId);
    if (found) {
      if (found.replies) {
        found.replies.push(newComment);
      } else {
        found['replies'] = [newComment];
      }
    }

    for (const node of arr) {
      if (node.replies) {
        this.insertDeepComment(node.replies, parentId, newComment);
      }
    }
  }

  addCommentToPost(feedId: string, content: string) {
    const newComment = this.generateComment(content);
    this.feedbacks = this.feedbacks.map((el) => {
      if (el.id === feedId) {
        el.comments?.push(newComment);
      }
      return el;
    });

    this.feedbackChange.next(this.feedbacks);
  }

  private generateComment(content: string) {
    return {
      id: `comment-${Date.now()}`,
      content: content,
      userInfo: UserData[UserData.length - 1], // guest user
    };
  }
}
