/* eslint-disable */
import * as _1 from "./rewards/v1/events";
import * as _2 from "./rewards/v1/genesis";
import * as _3 from "./rewards/v1/query";
import * as _4 from "./rewards/v1/rewards";
import * as _5 from "./rewards/v1/tx";
import * as _6 from "./tracking/v1/genesis";
import * as _7 from "./tracking/v1/query";
import * as _8 from "./tracking/v1/tracking";
import * as _16 from "./rewards/v1/tx.amino";
import * as _17 from "./rewards/v1/tx.registry";
import * as _18 from "./rewards/v1/query.rpc.Query";
import * as _19 from "./tracking/v1/query.rpc.Query";
import * as _20 from "./rewards/v1/tx.rpc.msg";
export namespace archway {
  export namespace rewards {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._16,
      ..._17,
      ..._18,
      ..._20
    };
  }
  export namespace tracking {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._19
    };
  }
}