import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/snapshot";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./evidence/v1beta1/evidence";
import * as _38 from "./evidence/v1beta1/genesis";
import * as _39 from "./evidence/v1beta1/query";
import * as _40 from "./evidence/v1beta1/tx";
import * as _41 from "./genutil/v1beta1/genesis";
import * as _42 from "./gov/v1beta1/genesis";
import * as _43 from "./gov/v1beta1/gov";
import * as _44 from "./gov/v1beta1/query";
import * as _45 from "./gov/v1beta1/tx";
import * as _46 from "./mint/v1beta1/genesis";
import * as _47 from "./mint/v1beta1/mint";
import * as _48 from "./mint/v1beta1/query";
import * as _49 from "./params/v1beta1/params";
import * as _50 from "./params/v1beta1/query";
import * as _51 from "./slashing/v1beta1/genesis";
import * as _52 from "./slashing/v1beta1/query";
import * as _53 from "./slashing/v1beta1/slashing";
import * as _54 from "./slashing/v1beta1/tx";
import * as _55 from "./staking/v1beta1/genesis";
import * as _56 from "./staking/v1beta1/query";
import * as _57 from "./staking/v1beta1/staking";
import * as _58 from "./staking/v1beta1/tx";
import * as _59 from "./tx/signing/v1beta1/signing";
import * as _60 from "./tx/v1beta1/service";
import * as _61 from "./tx/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/query";
import * as _63 from "./upgrade/v1beta1/upgrade";
import * as _64 from "./vesting/v1beta1/tx";
import * as _65 from "./vesting/v1beta1/vesting";
import * as _109 from "./auth/v1beta1/query.rpc.Query";
import * as _110 from "./bank/v1beta1/query.rpc.Query";
import * as _111 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _112 from "./distribution/v1beta1/query.rpc.Query";
import * as _113 from "./evidence/v1beta1/query.rpc.Query";
import * as _114 from "./gov/v1beta1/query.rpc.Query";
import * as _115 from "./mint/v1beta1/query.rpc.Query";
import * as _116 from "./params/v1beta1/query.rpc.Query";
import * as _117 from "./slashing/v1beta1/query.rpc.Query";
import * as _118 from "./staking/v1beta1/query.rpc.Query";
import * as _119 from "./tx/v1beta1/service.rpc.Service";
import * as _120 from "./upgrade/v1beta1/query.rpc.Query";
import * as _121 from "./bank/v1beta1/tx.rpc.msg";
import * as _122 from "./crisis/v1beta1/tx.rpc.msg";
import * as _123 from "./distribution/v1beta1/tx.rpc.msg";
import * as _124 from "./evidence/v1beta1/tx.rpc.msg";
import * as _125 from "./gov/v1beta1/tx.rpc.msg";
import * as _126 from "./slashing/v1beta1/tx.rpc.msg";
import * as _127 from "./staking/v1beta1/tx.rpc.msg";
import * as _128 from "./vesting/v1beta1/tx.rpc.msg";
import * as _139 from "./rpc.query";
import * as _140 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._109
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._110,
      ..._121
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._17
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._18
      };
    }
    export namespace query {
      export const v1beta1 = { ..._19
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._20
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._21
      };
    }
    export namespace store {
      export const v1beta1 = { ..._22,
        ..._23
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._24,
        ..._111
      };
    }
    export const v1beta1 = { ..._25
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._26,
      ..._27
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._28,
      ..._29,
      ..._122
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._30
    };
    export const multisig = { ..._31
    };
    export const secp256k1 = { ..._32
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._112,
      ..._123
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._113,
      ..._124
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._41
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._114,
      ..._125
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._46,
      ..._47,
      ..._48,
      ..._115
    };
  }
  export namespace params {
    export const v1beta1 = { ..._49,
      ..._50,
      ..._116
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._117,
      ..._126
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._58,
      ..._118,
      ..._127
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._59
      };
    }
    export const v1beta1 = { ..._60,
      ..._61,
      ..._119
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._120
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._64,
      ..._65,
      ..._128
    };
  }
  export const ClientFactory = { ..._139,
    ..._140
  };
}