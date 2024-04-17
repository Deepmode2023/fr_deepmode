export type UserType = {
  user_id: string;
  name: string;
  surname: string;
  email: string;
  roles: string[];
  create_at?: string;
  updated_account: string;
};

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
