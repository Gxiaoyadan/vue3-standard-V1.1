import axios from 'axios';
 /**
  * 在axios返回结果中存在默认字段之外的字段，于是就出现了警告。
  * 
  * AxiosResponse默认字段如下：
  * export interface AxiosResponse<T = any, D = any>  {
      data: T;
      status: number;
      statusText: string;
      headers: AxiosResponseHeaders;
      config: AxiosRequestConfig<D>;
      request?: any;
    }

    override AxiosResponse in my axios.d.ts:
    继承并新增两个字段
  */
declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {
    code:number,
    message:string
  }
}