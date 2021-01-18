function myBind(func, context, ...args) {

    return function(...arguments) {

        return func.apply(context, args.concat(arguments))

    }
};

//проверка (результат вроде тот же....)

function foo (args) {
    console.log(this.a, args)
}

a ='ooops'

const obj = {
    a: 42,
};
const bar = myBind(foo, obj, 10)

const obj1 = {
a: 100,
bar,
};

bar();
obj1.bar();
bar();
bar();
foo();