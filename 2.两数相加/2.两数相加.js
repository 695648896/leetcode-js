/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function ListNode(val){
        this.val = val
        this.next = null
    }
    let arrL1 = [],arrL2=[]
    while(l1){
        arrL1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        arrL2.push(l2.val)
        l2 = l2.next
    }
    let finalArr = []
    // 较长的数组为arrL1
    if(arrL1.length < arrL2.length){
        finalArr = arrL1
        arrL1=arrL2
        arrL2=finalArr
        finalArr= []
    }
    let first,l3
    for(let i = 0; i < arrL1.length; i++){
        // arrl2的位数不够
        if(!arrL2[i]){
            arrL2[i]= 0
        }
        // 进位情况
        if(arrL1[i] + arrL2[i]> 9){
            // 最后一个数进位时候，arrL1长度增加，不置为0会NaN
            if(!arrL1[i+ 1]){
                arrL1[i+ 1] = 0
            }
            // 下一位数+1
            arrL1[i+ 1] = arrL1[i+ 1]+ 1
            // 将相加数存进finalArr
            finalArr.push((arrL1[i] + arrL2[i] - 10))
        }else{
            finalArr.push((arrL1[i] + arrL2[i]))
        }
        if(i===0){
            // 首节点
            first = new ListNode(finalArr[0])
            // l3为当前节点
            l3 = first
        }else{
            l3.next = new ListNode(finalArr[i])
            l3 = l3.next
        }

    }
    return first

};
// @lc code=end

