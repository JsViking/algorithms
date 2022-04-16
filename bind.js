// Function.prototype.myBind = function(ctx, ...rest) {
//     const uniqKey = new Date().getTime()
//     const sym = Symbol(uniqKey);
//     ctx[sym] = this
//     const func = (...args) => ctx[sym](...args.concat(rest))
//     return func
// }

Function.prototype.myBind = function(ctx, ...rest) {
    return (...args)  => {
        const uniqKey = new Date().getTime()
        ctx[uniqKey] = this
        const value = ctx[uniqKey](...args.concat(...rest))
        delete ctx[uniqKey]
        return value
    } 
}

const obj = {
    name: 'alexey'
}

const myFunc = function(secondName) {
    return {
        firstName: this.name,
        secondName: secondName
    }
}

const bindFunc = myFunc.myBind(obj, 'Karabanov')

console.log('@@@@@@@', bindFunc())