###


+ 1.父向子(通过props传值)

+ 2.父向更深层的子（通过context传值）

+ 3.子向父（通过回调函数传值：在父组件中创建一个函数来接收子组件传过来的参数值，通过父组件将这个函数做为子组件的属性传递到子组件中，再然后，子组件通过props接收并调用该函数同时传参）

+ 4.没有任何嵌套关系的组件之间传值（如：兄弟组件之间）