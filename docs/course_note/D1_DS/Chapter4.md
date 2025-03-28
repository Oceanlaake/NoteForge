# 第四章:树
## 4.2 二叉树

## 4.3 二叉搜索树

- **定义**: 对于二叉树中每一个节点X，其左子树中的所有键的值都小于X的键值，右子树中的所有键的值都大于X的键值。这是一种动态的结构
- **性质**:
     1. 最小节点在左叶节点, 最大节点在右叶节点.
     2. BST中每个结点的值都不同
     3. 中序遍历递增
- **操作**: **查找**, 插入, 删除等
- **复杂度**: 平均O(logn), 最坏O(n), 由结构决定
### *查找*
```
/*递归查找*/
BSTNode* search(BSTNode* root, int key) {
    if (root == NULL || root->key == key) {
        return root;     //不在树中/找到了
    }
    if (key < root->key) {
        return search(root->left, key);   //在左子树中查找
    } else {
        return search(root->right, key);  //在右子树中查找
    }
}
```
```
/*非递归查找*/
BSTNode* search(BSTNode* root, int key) {
    while (root!= NULL && root->key!= key) {
        if (key < root->key) {
            root = root->left;
        } else {
            root = root->right;
        }
    }
    return root;
}
```
### *插入*
- 一般不会重复, 如遇到重复对节点增加count
```
/*非递归插入*/
BSTNode* insert(BSTNode* root, int key) {
    if (root == NULL) {
        return new BSTNode(key);
    }
    if (key < root->key) {
        root->left = insert(root->left, key);
    } else if (key > root->key) {
        root->right = insert(root->right, key);
    }
    return root;
}
```
### *删除*
- 删除叶节点: 直接删除, 使用NULL代替
- 删除只有一个子节点的节点: 直接用子节点替换父节点
- 删除有两个子节点的节点: 用左子树最大值和右子树最小值替换父节点, 将删除两个子节点节点的问题转化为删除无或有一个子节点节点的问题
```
/*递归删除*/
BSTNode* delete(BSTNode* root, int key){
    BSTNode* TmpCell;
    if(root == NULL){
        error("key not found");
    }else if(key < root->key){
        root->left = delete(root->left, key);
    }else if(key > root->key){
        root->right = delete(root->right, key);
    }else{
        if(root->left && root->right){
            BSTNode* TempCell = findMin(root->right);
            root->key = TempCell->key;
            root->right = delete(root->right, TempCell->key);
        }
        else{
            TmpCell = root;
            if(TmpCell->left == NULL){
                TmpCell = TmpCell->right;
            }
            else if(TmpCell->right == NULL){
                TmpCell = TmpCell->left;
            }
            free(TmpCell);
        }
    }
    return root;
}
```
