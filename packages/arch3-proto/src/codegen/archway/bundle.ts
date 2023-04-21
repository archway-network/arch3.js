/* eslint-disable */
import * as _0 from "./rewards/v1beta1/events";
import * as _1 from "./rewards/v1beta1/genesis";
import * as _2 from "./rewards/v1beta1/query";
import * as _3 from "./rewards/v1beta1/rewards";
import * as _4 from "./rewards/v1beta1/tx";
import * as _5 from "./tracking/v1beta1/genesis";
import * as _6 from "./tracking/v1beta1/query";
import * as _7 from "./tracking/v1beta1/tracking";
import * as _73 from "./rewards/v1beta1/query.rpc.Query";
import * as _74 from "./tracking/v1beta1/query.rpc.Query";
import * as _75 from "./rewards/v1beta1/tx.rpc.msg";
import * as _94 from "./rpc.query";
import * as _95 from "./rpc.tx";
export namespace archway {
  export namespace rewards {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._73,
      ..._75
    };
  }
  export namespace tracking {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._74
    };
  }
  export const ClientFactory = {
    ..._94,
    ..._95
  };
}