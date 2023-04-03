// import React, { useEffect, useState } from "react";

// export default function NestedComments() {
//   const [comments, setComments] = useState("test");

//   useEffect(() => {
//     const fetchData = async () => {
//       let data = [
//         {
//           id: 1,
//           parentId: null,
//           text: "Hey i made a ridiculous hot comment"
//         },
//         {
//           id: 2,
//           parentId: 1,
//           text: "you are funny"
//         },
//         {
//           id: 3,
//           parentId: 1,
//           text: "you are hilarious"
//         },
//         {
//           id: 4,
//           parentId: 3,
//           text: "you hilarious x 2"
//         },
//         {
//           id: 5,
//           parentId: 4,
//           text: "you hilarious x 3!"
//         }
//       ];
//       let formattedComments = await formatComments(data);
//       await setComments(formattedComments);
//     };

//     fetchData();
//   }, []);

//   const formatComments = (commentsArr) => {
//     const tree = commentsArr.reduce((agg, current) => {
//       current["children"] = [];

//       if (current.parentId == null) {
//         agg = current;
//       } else {
//         agg = findParentCommment(current, agg, commentsArr);
//       }

//       return agg;
//     }, {});

//     debugger
//     console.log(tree);
//   };

//   const findParentCommment = (comment, agg, allComments) => {
//     debugger
//   };

//   return (
//     <div className="App">
//       {}
//     </div>
//   );
// }


const comments = [
    {
        id: 5819,
        parent: 0,
        content: "Waar vind ik meer?",
        comments: []
    },
    {
        id: 5820,
        parent: 5819,
        content: "Epic site!",
        comments: []
    },
    {
        id: 5821,
        parent: 5819,
        content: "Stoinks.",
        comments: []
    },
    {
        id: 5822,
        parent: 5821,
        content: "Can I get a what now?",
        comments: []
    },
    {
        id: 5823,
        parent: 0,
        content: "Yeeeee",
        comments: []
    }
];

const recursive = (comment) => {
    const parentComment = comments.find(x => x.id == comment.parent)
    if(parentComment){
        parentComment.comments.push(comment)
    }
    return comment
}


const buildComments = (comments) => {
    const ans = []
    comments.forEach((comment) => {
        const things = recursive(comment)
        if(things.parent == 0){
            ans.push(things)
        }
    })
    return ans
}

// const NO_PARENT = 0;
// const ThreeD = [];

// function recursive(comment) {
//     const parentComment = comments.find((x) => x.id === comment.parent);
//     if (parentComment) {
//         parentComment.comments.push(comment);
//     }
//     return comment;
// }

// const buildComments = () => {
//   const ans = []
//   comments.forEach((comment) => {
//       const things = recursive(comment);
//       if (things.parent === NO_PARENT) {
//           ans.push(things);
//       }
//   });
//   return ans
// }

// const recursive = (comment) => {
//   const parentComment = comments.find((x) => { return x.id == comment.parent})
//   if(parentComment){
//     parentComment.comments.push(comment)
//   }
//   return comment
// }

// const buildComments = (comments) => {
//   const newComments = []

//   comments.forEach((comment) => {
//     let things = recursive(comment)
//     if(things.parent == 0){
//       newComments.push(things)
//     }
//   })
//   return newComments
// }

console.log("buildComments:", buildComments(comments))
