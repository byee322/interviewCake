const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

const mergeSorted = (nums1, m, nums2, n) => {
  const ans = []
  let left = 0,
      right = 0

  while(ans.length < (m + n)){
    if(left == m){
      ans.push(nums2[right])
      right++
    }else if(right == n){
      ans.push(nums1[left])
      left++
    }else if(nums1[left] <= nums2[right]){
      ans.push(nums1[left])
      left++
    }else{
      ans.push(nums2[right])
      right++
    }
  }

  return ans
}

console.log("mergeSorted :", mergeSorted(nums1, m, nums2, n))
