transclude：还有一个值为 “element”

那transclude：“element”与transclude：true有什么区别呢？

区别在于嵌入的内容，以上面的例子来说，

当transclude：true时候，嵌入的内容为{{name}}，

而当transclude：“element”时候，嵌入的内容为

<hello-world>
   {{name}}
</hello-world>
没错，此时嵌入的内容为整个元素。

===============================
当 transclude：“element” 时候，必须有 replace:true 否则报错