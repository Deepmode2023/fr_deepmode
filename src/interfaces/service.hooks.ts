export interface IServiceHooksResponse<TCallParams, TData> {
  callAPI: (params: TCallParams) => void;
  data: TData;
}
