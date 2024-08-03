export type BodyDetailType<TInput> = {
  input: TInput;
  loc: Array<string>;
  type: string;
  msg: string;
  ctx: { reason: string };
};

export interface ITotalResponse<TInput> {
  detail: Array<BodyDetailType<TInput>>;
}
