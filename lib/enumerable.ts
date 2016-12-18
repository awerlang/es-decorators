// copied from https://www.typescriptlang.org/docs/handbook/decorators.html

export function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}