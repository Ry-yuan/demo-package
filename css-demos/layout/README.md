#圣杯布局和双飞翼布局
## 两者相同：
圣杯布局和双飞翼布局解决的问题是一样的，就是两边顶宽，中间自适应的三栏布局，中间栏要在放在文档流前面以优先渲染。（固比固布局）

圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部float浮动，但左右两栏加上负margin让其跟中间栏div并排，以形成三栏布局。


## 两者不同:
在于解决”中间栏div内容不被遮挡“问题的思路不一样：
#### 圣杯布局:
>为了中间div内容不被遮挡，将容器设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。

#### 双飞翼布局:
>为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。
多了1个div，少用大致4个css属性（圣杯布局中间divpadding-left和padding-right这2个属性，加上左右两个div用相对布局position: relative及对应的right和left共4个属性，一共6个；而双飞翼布局子div里用margin-left和margin-right共2个属性，6-2=4），个人感觉比圣杯布局思路更直接和简洁一点。
简单说起来就是”双飞翼布局比圣杯布局多创建了一个div，但不用相对布局了“，而不是你题目中说的”去掉relative"就是双飞翼布局“。