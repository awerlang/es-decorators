# es-decorators

Decorators for ECMAScript / JavaScript / TypeScript.

I started this repository after [this answer](http://stackoverflow.com/a/29706811/592792) on Stack Overflow. I expect to improve the current decorators and add a few other utility decorators. So, this is not much more than a WIP at the moment. If you want to use any of them, it might be simpler to just copy over to your project and watch for updates.

Also, I want to investigate how useful they can be in a project and what implications they may bring with them. For instance, they make decorated classes non-treeshakable, so that's one concern.

Available decorators:
* serialize
* serializable
* enumerable

# Usage

```ts
@serializable()
class Person {

    constructor(name: string) {
      this._name = name;
    }
    
    private _name: string;

    @serialize()
    get name() {
      return this._name;
    }

    @serialize('Language')
    get lang() {
      return 'JavaScript';
    }
}

const p = new Person('André'); 
alert(JSON.stringify(p))
```

# License

MIT