/* eslint-disable */
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/query/v1beta1/pagination";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/multisig/keys";
import * as _18 from "./crypto/secp256k1/keys";
import * as _19 from "./distribution/v1beta1/distribution";
import * as _20 from "./distribution/v1beta1/genesis";
import * as _21 from "./distribution/v1beta1/query";
import * as _22 from "./distribution/v1beta1/tx";
import * as _23 from "./gov/v1beta1/genesis";
import * as _24 from "./gov/v1beta1/gov";
import * as _25 from "./gov/v1beta1/query";
import * as _26 from "./gov/v1beta1/tx";
import * as _27 from "./staking/v1beta1/genesis";
import * as _28 from "./staking/v1beta1/query";
import * as _29 from "./staking/v1beta1/staking";
import * as _30 from "./staking/v1beta1/tx";
import * as _31 from "./tx/signing/v1beta1/signing";
import * as _32 from "./tx/v1beta1/service";
import * as _33 from "./tx/v1beta1/tx";
import * as _34 from "./upgrade/v1beta1/query";
import * as _35 from "./upgrade/v1beta1/upgrade";
import * as _77 from "./bank/v1beta1/tx.amino";
import * as _78 from "./distribution/v1beta1/tx.amino";
import * as _79 from "./gov/v1beta1/tx.amino";
import * as _80 from "./staking/v1beta1/tx.amino";
import * as _81 from "./bank/v1beta1/tx.registry";
import * as _82 from "./distribution/v1beta1/tx.registry";
import * as _83 from "./gov/v1beta1/tx.registry";
import * as _84 from "./staking/v1beta1/tx.registry";
import * as _85 from "./bank/v1beta1/query.rpc.Query";
import * as _86 from "./distribution/v1beta1/query.rpc.Query";
import * as _87 from "./gov/v1beta1/query.rpc.Query";
import * as _88 from "./staking/v1beta1/query.rpc.Query";
import * as _89 from "./tx/v1beta1/service.rpc.Service";
import * as _90 from "./upgrade/v1beta1/query.rpc.Query";
import * as _91 from "./bank/v1beta1/tx.rpc.msg";
import * as _92 from "./distribution/v1beta1/tx.rpc.msg";
import * as _93 from "./gov/v1beta1/tx.rpc.msg";
import * as _94 from "./staking/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._77,
      ..._81,
      ..._85,
      ..._91
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._13
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._14
      };
    }
    export const v1beta1 = {
      ..._15
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._16
    };
    export const multisig = {
      ..._17
    };
    export const secp256k1 = {
      ..._18
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._78,
      ..._82,
      ..._86,
      ..._92
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._79,
      ..._83,
      ..._87,
      ..._93
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._80,
      ..._84,
      ..._88,
      ..._94
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._31
      };
    }
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._89
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._90
    };
  }
}