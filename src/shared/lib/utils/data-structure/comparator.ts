export type CompareFunctionType<TValue> = (
  value: ValueType<TValue>,
  compareValue: ValueType<TValue>
) => number;

type ValueType<TValue> = TValue | undefined | null | number;

export class Comparator<TValue> {
  compare: CompareFunctionType<TValue>;
  constructor(compareFunction?: CompareFunctionType<TValue>) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction<TValue>(value: TValue, compareValue: TValue) {
    if (value === compareValue) {
      return 0;
    }

    return value < compareValue ? -1 : 1;
  }

  equal(value: ValueType<TValue>, compareValue: ValueType<TValue>) {
    return this.compare(value, compareValue) === 0;
  }

  lessThan(value: ValueType<TValue>, compareValue: ValueType<TValue>) {
    console.log(this.compare);
    return this.compare(value, compareValue) < 0;
  }

  greaterThan(value: ValueType<TValue>, compareValue: ValueType<TValue>) {
    return this.compare(value, compareValue) > 0;
  }

  lessThanOrEqual(value: ValueType<TValue>, compareValue: ValueType<TValue>) {
    return (
      this.lessThan(value, compareValue) || this.equal(value, compareValue)
    );
  }

  greaterThanOrEqual(
    value: ValueType<TValue>,
    compareValue: ValueType<TValue>
  ) {
    return (
      this.greaterThan(value, compareValue) || this.equal(value, compareValue)
    );
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (value, compareValue) =>
      compareOriginal(compareValue, value);
  }
}
