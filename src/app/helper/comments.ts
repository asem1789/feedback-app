export const getLengthOfComments = (comments: any[]) => {
  let sum = comments.length;

  function handleLength(start: number, arr: any[]): any {
    let length = arr.reduce((acc, curr) => {
      if (curr.replies) {
        return acc + curr.replies.length;
      } else {
        return acc;
      }
    }, 0);

    if (length === 0) {
      return start;
    } else {
      for (const el of arr) {
        if (el.replies) {
          return handleLength(length + start, el.replies);
        }
      }
    }
  }

  return handleLength(sum, comments);
};
