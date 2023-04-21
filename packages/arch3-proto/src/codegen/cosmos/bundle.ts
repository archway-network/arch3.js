/* eslint-disable */
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./crypto/ed25519/keys";
import * as _18 from "./crypto/multisig/keys";
import * as _19 from "./crypto/secp256k1/keys";
import * as _20 from "./distribution/v1beta1/distribution";
import * as _21 from "./distribution/v1beta1/genesis";
import * as _22 from "./distribution/v1beta1/query";
import * as _23 from "./distribution/v1beta1/tx";
import * as _24 from "./gov/v1beta1/genesis";
import * as _25 from "./gov/v1beta1/gov";
import * as _26 from "./gov/v1beta1/query";
import * as _27 from "./gov/v1beta1/tx";
import * as _28 from "./staking/v1beta1/genesis";
import * as _29 from "./staking/v1beta1/query";
import * as _30 from "./staking/v1beta1/staking";
import * as _31 from "./staking/v1beta1/tx";
import * as _32 from "./tx/signing/v1beta1/signing";
import * as _33 from "./tx/v1beta1/service";
import * as _34 from "./tx/v1beta1/tx";
import * as _35 from "./upgrade/v1beta1/query";
import * as _36 from "./upgrade/v1beta1/upgrade";
import * as _76 from "./bank/v1beta1/query.rpc.Query";
import * as _77 from "./distribution/v1beta1/query.rpc.Query";
import * as _78 from "./gov/v1beta1/query.rpc.Query";
import * as _79 from "./staking/v1beta1/query.rpc.Query";
import * as _80 from "./tx/v1beta1/service.rpc.Service";
import * as _81 from "./upgrade/v1beta1/query.rpc.Query";
import * as _82 from "./bank/v1beta1/tx.rpc.msg";
import * as _83 from "./distribution/v1beta1/tx.rpc.msg";
import * as _84 from "./gov/v1beta1/tx.rpc.msg";
import * as _85 from "./staking/v1beta1/tx.rpc.msg";
import * as _96 from "./rpc.query";
import * as _97 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._76,
      ..._82
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._15
      };
    }
    export const v1beta1 = {
      ..._16
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._17
    };
    export const multisig = {
      ..._18
    };
    export const secp256k1 = {
      ..._19
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._77,
      ..._83
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._78,
      ..._84
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._79,
      ..._85
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._32
      };
    }
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._80
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._35,
      ..._36,
      ..._81
    };
  }
  export const ClientFactory = {
    ..._96,
    ..._97
  };
}