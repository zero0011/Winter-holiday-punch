## 题目
    请你设计一个迭代器类 , 包括以下内容
 - 一个构造函数 , 输入参数包括 : 一个有序且字符唯一的字符串
        characters (该字符串只包含小写英文字母) 和一个数字 
        combinationLength
 - 函数 next() ,按 字典序 返回长度为 combinationLength 的下一个字母组合
 - 函数 hasNext() , 只有存在长度为 combinationLength 的下一个字母组合时 , 才返回 true ; 否则, 返回 false