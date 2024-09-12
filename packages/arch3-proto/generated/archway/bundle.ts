/* eslint-disable */
import * as _1 from "./callback/v1/callback";
import * as _2 from "./callback/v1/errors";
import * as _3 from "./callback/v1/events";
import * as _4 from "./callback/v1/genesis";
import * as _5 from "./callback/v1/query";
import * as _6 from "./callback/v1/tx";
import * as _7 from "./cwerrors/v1/cwerrors";
import * as _8 from "./cwerrors/v1/events";
import * as _9 from "./cwerrors/v1/genesis";
import * as _10 from "./cwerrors/v1/params";
import * as _11 from "./cwerrors/v1/query";
import * as _12 from "./cwerrors/v1/tx";
import * as _13 from "./cwfees/v1/cwfees";
import * as _14 from "./cwica/v1/errors";
import * as _15 from "./cwica/v1/genesis";
import * as _16 from "./cwica/v1/params";
import * as _17 from "./cwica/v1/query";
import * as _18 from "./cwica/v1/sudo";
import * as _19 from "./cwica/v1/tx";
import * as _20 from "./rewards/v1/events";
import * as _21 from "./rewards/v1/genesis";
import * as _22 from "./rewards/v1/query";
import * as _23 from "./rewards/v1/rewards";
import * as _24 from "./rewards/v1/tx";
import * as _25 from "./tracking/v1/genesis";
import * as _26 from "./tracking/v1/query";
import * as _27 from "./tracking/v1/tracking";
import * as _37 from "./callback/v1/tx.amino";
import * as _38 from "./cwerrors/v1/tx.amino";
import * as _39 from "./cwfees/v1/cwfees.amino";
import * as _40 from "./cwica/v1/tx.amino";
import * as _41 from "./rewards/v1/tx.amino";
import * as _42 from "./callback/v1/tx.registry";
import * as _43 from "./cwerrors/v1/tx.registry";
import * as _44 from "./cwfees/v1/cwfees.registry";
import * as _45 from "./cwica/v1/tx.registry";
import * as _46 from "./rewards/v1/tx.registry";
import * as _47 from "./callback/v1/query.rpc.Query";
import * as _48 from "./cwerrors/v1/query.rpc.Query";
import * as _49 from "./cwfees/v1/cwfees.rpc.Query";
import * as _50 from "./cwica/v1/query.rpc.Query";
import * as _51 from "./rewards/v1/query.rpc.Query";
import * as _52 from "./tracking/v1/query.rpc.Query";
import * as _53 from "./callback/v1/tx.rpc.msg";
import * as _54 from "./cwerrors/v1/tx.rpc.msg";
import * as _55 from "./cwfees/v1/cwfees.rpc.msg";
import * as _56 from "./cwica/v1/tx.rpc.msg";
import * as _57 from "./rewards/v1/tx.rpc.msg";
export namespace archway {
  export namespace callback {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._37,
      ..._42,
      ..._47,
      ..._53
    };
  }
  export namespace cwerrors {
    export const v1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._38,
      ..._43,
      ..._48,
      ..._54
    };
  }
  export namespace cwfees {
    export const v1 = {
      ..._13,
      ..._39,
      ..._44,
      ..._49,
      ..._55
    };
  }
  export namespace cwica {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._40,
      ..._45,
      ..._50,
      ..._56
    };
  }
  export namespace rewards {
    export const v1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._41,
      ..._46,
      ..._51,
      ..._57
    };
  }
  export namespace tracking {
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._52
    };
  }
}