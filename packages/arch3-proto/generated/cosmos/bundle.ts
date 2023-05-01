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
import * as _19 from "./tx/signing/v1beta1/signing";
import * as _20 from "./tx/v1beta1/service";
import * as _21 from "./tx/v1beta1/tx";
import * as _63 from "./bank/v1beta1/tx.amino";
import * as _64 from "./bank/v1beta1/tx.registry";
import * as _65 from "./bank/v1beta1/query.rpc.Query";
import * as _66 from "./tx/v1beta1/service.rpc.Service";
import * as _67 from "./bank/v1beta1/tx.rpc.msg";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._63,
      ..._64,
      ..._65,
      ..._67
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
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._19
      };
    }
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._66
    };
  }
}