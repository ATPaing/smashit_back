
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model game
 * 
 */
export type game = $Result.DefaultSelection<Prisma.$gamePayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model invitation
 * 
 */
export type invitation = $Result.DefaultSelection<Prisma.$invitationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const game_feeType: {
  FREE: 'FREE',
  SPLIT: 'SPLIT'
};

export type game_feeType = (typeof game_feeType)[keyof typeof game_feeType]


export const notification_type: {
  FRIEND_REQUEST: 'FRIEND_REQUEST',
  INVITATION_RECEIVED: 'INVITATION_RECEIVED',
  MATCH_ACCEPTED: 'MATCH_ACCEPTED',
  GAME_CANCELLED: 'GAME_CANCELLED'
};

export type notification_type = (typeof notification_type)[keyof typeof notification_type]


export const invitation_status: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type invitation_status = (typeof invitation_status)[keyof typeof invitation_status]


export const attendance_status: {
  PRESENT: 'PRESENT',
  NO_SHOW: 'NO_SHOW'
};

export type attendance_status = (typeof attendance_status)[keyof typeof attendance_status]

}

export type game_feeType = $Enums.game_feeType

export const game_feeType: typeof $Enums.game_feeType

export type notification_type = $Enums.notification_type

export const notification_type: typeof $Enums.notification_type

export type invitation_status = $Enums.invitation_status

export const invitation_status: typeof $Enums.invitation_status

export type attendance_status = $Enums.attendance_status

export const attendance_status: typeof $Enums.attendance_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.game`: Exposes CRUD operations for the **game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.gameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.invitationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    game: 'game',
    notification: 'notification',
    user: 'user',
    invitation: 'invitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "game" | "notification" | "user" | "invitation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      game: {
        payload: Prisma.$gamePayload<ExtArgs>
        fields: Prisma.gameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findFirst: {
            args: Prisma.gameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          findMany: {
            args: Prisma.gameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[]
          }
          create: {
            args: Prisma.gameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          createMany: {
            args: Prisma.gameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          update: {
            args: Prisma.gameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          deleteMany: {
            args: Prisma.gameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.gameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.gameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      invitation: {
        payload: Prisma.$invitationPayload<ExtArgs>
        fields: Prisma.invitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          findFirst: {
            args: Prisma.invitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          findMany: {
            args: Prisma.invitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>[]
          }
          create: {
            args: Prisma.invitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          createMany: {
            args: Prisma.invitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.invitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          update: {
            args: Prisma.invitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          deleteMany: {
            args: Prisma.invitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.invitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.invitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.invitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    game?: gameOmit
    notification?: notificationOmit
    user?: userOmit
    invitation?: invitationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    notification: number
    invitation: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | GameCountOutputTypeCountNotificationArgs
    invitation?: boolean | GameCountOutputTypeCountInvitationArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hostedGame: number
    invitation: number
    notification_notification_recipientIdTouser: number
    notification_notification_senderIdTouser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedGame?: boolean | UserCountOutputTypeCountHostedGameArgs
    invitation?: boolean | UserCountOutputTypeCountInvitationArgs
    notification_notification_recipientIdTouser?: boolean | UserCountOutputTypeCountNotification_notification_recipientIdTouserArgs
    notification_notification_senderIdTouser?: boolean | UserCountOutputTypeCountNotification_notification_senderIdTouserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostedGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotification_notification_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotification_notification_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    hostId: number | null
    minReliabilityScore: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    hostId: number | null
    minReliabilityScore: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    hostId: number | null
    name: string | null
    location: string | null
    startTime: Date | null
    endTime: Date | null
    feeType: $Enums.game_feeType | null
    minReliabilityScore: number | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    hostId: number | null
    name: string | null
    location: string | null
    startTime: Date | null
    endTime: Date | null
    feeType: $Enums.game_feeType | null
    minReliabilityScore: number | null
    isCancelled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    hostId: number
    name: number
    location: number
    startTime: number
    endTime: number
    feeType: number
    minReliabilityScore: number
    isCancelled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    hostId?: true
    minReliabilityScore?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    hostId?: true
    minReliabilityScore?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    location?: true
    startTime?: true
    endTime?: true
    feeType?: true
    minReliabilityScore?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    location?: true
    startTime?: true
    endTime?: true
    feeType?: true
    minReliabilityScore?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    location?: true
    startTime?: true
    endTime?: true
    feeType?: true
    minReliabilityScore?: true
    isCancelled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game to aggregate.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput
    orderBy?: gameOrderByWithAggregationInput | gameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: gameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    hostId: number
    name: string
    location: string
    startTime: Date
    endTime: Date
    feeType: $Enums.game_feeType
    minReliabilityScore: number
    isCancelled: boolean
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    name?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    feeType?: boolean
    minReliabilityScore?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | userDefaultArgs<ExtArgs>
    notification?: boolean | game$notificationArgs<ExtArgs>
    invitation?: boolean | game$invitationArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>



  export type gameSelectScalar = {
    id?: boolean
    hostId?: boolean
    name?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    feeType?: boolean
    minReliabilityScore?: boolean
    isCancelled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type gameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hostId" | "name" | "location" | "startTime" | "endTime" | "feeType" | "minReliabilityScore" | "isCancelled" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | userDefaultArgs<ExtArgs>
    notification?: boolean | game$notificationArgs<ExtArgs>
    invitation?: boolean | game$invitationArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "game"
    objects: {
      host: Prisma.$userPayload<ExtArgs>
      notification: Prisma.$notificationPayload<ExtArgs>[]
      invitation: Prisma.$invitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hostId: number
      name: string
      location: string
      startTime: Date
      endTime: Date
      feeType: $Enums.game_feeType
      minReliabilityScore: number
      isCancelled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type gameGetPayload<S extends boolean | null | undefined | gameDefaultArgs> = $Result.GetResult<Prisma.$gamePayload, S>

  type gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game'], meta: { name: 'game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {gameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gameFindUniqueArgs>(args: SelectSubset<T, gameFindUniqueArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gameFindUniqueOrThrowArgs>(args: SelectSubset<T, gameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gameFindFirstArgs>(args?: SelectSubset<T, gameFindFirstArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gameFindFirstOrThrowArgs>(args?: SelectSubset<T, gameFindFirstOrThrowArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gameFindManyArgs>(args?: SelectSubset<T, gameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {gameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends gameCreateArgs>(args: SelectSubset<T, gameCreateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {gameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gameCreateManyArgs>(args?: SelectSubset<T, gameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {gameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends gameDeleteArgs>(args: SelectSubset<T, gameDeleteArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {gameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gameUpdateArgs>(args: SelectSubset<T, gameUpdateArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {gameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gameDeleteManyArgs>(args?: SelectSubset<T, gameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gameUpdateManyArgs>(args: SelectSubset<T, gameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {gameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends gameUpsertArgs>(args: SelectSubset<T, gameUpsertArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gameCountArgs>(
      args?: Subset<T, gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGroupByArgs['orderBy'] }
        : { orderBy?: gameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the game model
   */
  readonly fields: gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notification<T extends game$notificationArgs<ExtArgs> = {}>(args?: Subset<T, game$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitation<T extends game$invitationArgs<ExtArgs> = {}>(args?: Subset<T, game$invitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the game model
   */
  interface gameFieldRefs {
    readonly id: FieldRef<"game", 'Int'>
    readonly hostId: FieldRef<"game", 'Int'>
    readonly name: FieldRef<"game", 'String'>
    readonly location: FieldRef<"game", 'String'>
    readonly startTime: FieldRef<"game", 'DateTime'>
    readonly endTime: FieldRef<"game", 'DateTime'>
    readonly feeType: FieldRef<"game", 'game_feeType'>
    readonly minReliabilityScore: FieldRef<"game", 'Int'>
    readonly isCancelled: FieldRef<"game", 'Boolean'>
    readonly createdAt: FieldRef<"game", 'DateTime'>
    readonly updatedAt: FieldRef<"game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * game findUnique
   */
  export type gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findUniqueOrThrow
   */
  export type gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game findFirst
   */
  export type gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findFirstOrThrow
   */
  export type gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game findMany
   */
  export type gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * game create
   */
  export type gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to create a game.
     */
    data: XOR<gameCreateInput, gameUncheckedCreateInput>
  }

  /**
   * game createMany
   */
  export type gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * game update
   */
  export type gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The data needed to update a game.
     */
    data: XOR<gameUpdateInput, gameUncheckedUpdateInput>
    /**
     * Choose, which game to update.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game updateMany
   */
  export type gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gameWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * game upsert
   */
  export type gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * The filter to search for the game to update in case it exists.
     */
    where: gameWhereUniqueInput
    /**
     * In case the game found by the `where` argument doesn't exist, create a new game with this data.
     */
    create: XOR<gameCreateInput, gameUncheckedCreateInput>
    /**
     * In case the game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameUpdateInput, gameUncheckedUpdateInput>
  }

  /**
   * game delete
   */
  export type gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    /**
     * Filter which game to delete.
     */
    where: gameWhereUniqueInput
  }

  /**
   * game deleteMany
   */
  export type gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gameWhereInput
    /**
     * Limit how many games to delete.
     */
    limit?: number
  }

  /**
   * game.notification
   */
  export type game$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * game.invitation
   */
  export type game$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    where?: invitationWhereInput
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    cursor?: invitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * game without action
   */
  export type gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    gameId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    gameId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    type: $Enums.notification_type | null
    title: string | null
    message: string | null
    isRead: boolean | null
    gameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    recipientId: number | null
    senderId: number | null
    type: $Enums.notification_type | null
    title: string | null
    message: string | null
    isRead: boolean | null
    gameId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    recipientId: number
    senderId: number
    type: number
    title: number
    message: number
    isRead: number
    gameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    gameId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    gameId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    recipientId?: true
    senderId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    recipientId: number
    senderId: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead: boolean
    gameId: number | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    senderId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | notification$gameArgs<ExtArgs>
    user_notification_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_notification_senderIdTouser?: boolean | notification$user_notification_senderIdTouserArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type notificationSelectScalar = {
    id?: boolean
    recipientId?: boolean
    senderId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipientId" | "senderId" | "type" | "title" | "message" | "isRead" | "gameId" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | notification$gameArgs<ExtArgs>
    user_notification_recipientIdTouser?: boolean | userDefaultArgs<ExtArgs>
    user_notification_senderIdTouser?: boolean | notification$user_notification_senderIdTouserArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      game: Prisma.$gamePayload<ExtArgs> | null
      user_notification_recipientIdTouser: Prisma.$userPayload<ExtArgs>
      user_notification_senderIdTouser: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipientId: number
      senderId: number | null
      type: $Enums.notification_type
      title: string
      message: string
      isRead: boolean
      gameId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends notification$gameArgs<ExtArgs> = {}>(args?: Subset<T, notification$gameArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_notification_recipientIdTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_notification_senderIdTouser<T extends notification$user_notification_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, notification$user_notification_senderIdTouserArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly recipientId: FieldRef<"notification", 'Int'>
    readonly senderId: FieldRef<"notification", 'Int'>
    readonly type: FieldRef<"notification", 'notification_type'>
    readonly title: FieldRef<"notification", 'String'>
    readonly message: FieldRef<"notification", 'String'>
    readonly isRead: FieldRef<"notification", 'Boolean'>
    readonly gameId: FieldRef<"notification", 'Int'>
    readonly createdAt: FieldRef<"notification", 'DateTime'>
    readonly updatedAt: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification.game
   */
  export type notification$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
  }

  /**
   * notification.user_notification_senderIdTouser
   */
  export type notification$user_notification_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    reliabilityScore: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    reliabilityScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    reliabilityScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    reliabilityScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    reliabilityScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    reliabilityScore?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    reliabilityScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    reliabilityScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    reliabilityScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    reliabilityScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    reliabilityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostedGame?: boolean | user$hostedGameArgs<ExtArgs>
    invitation?: boolean | user$invitationArgs<ExtArgs>
    notification_notification_recipientIdTouser?: boolean | user$notification_notification_recipientIdTouserArgs<ExtArgs>
    notification_notification_senderIdTouser?: boolean | user$notification_notification_senderIdTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    reliabilityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "reliabilityScore" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostedGame?: boolean | user$hostedGameArgs<ExtArgs>
    invitation?: boolean | user$invitationArgs<ExtArgs>
    notification_notification_recipientIdTouser?: boolean | user$notification_notification_recipientIdTouserArgs<ExtArgs>
    notification_notification_senderIdTouser?: boolean | user$notification_notification_senderIdTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      hostedGame: Prisma.$gamePayload<ExtArgs>[]
      invitation: Prisma.$invitationPayload<ExtArgs>[]
      notification_notification_recipientIdTouser: Prisma.$notificationPayload<ExtArgs>[]
      notification_notification_senderIdTouser: Prisma.$notificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      reliabilityScore: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostedGame<T extends user$hostedGameArgs<ExtArgs> = {}>(args?: Subset<T, user$hostedGameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitation<T extends user$invitationArgs<ExtArgs> = {}>(args?: Subset<T, user$invitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification_notification_recipientIdTouser<T extends user$notification_notification_recipientIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$notification_notification_recipientIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification_notification_senderIdTouser<T extends user$notification_notification_senderIdTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$notification_notification_senderIdTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly passwordHash: FieldRef<"user", 'String'>
    readonly reliabilityScore: FieldRef<"user", 'Int'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.hostedGame
   */
  export type user$hostedGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the game
     */
    omit?: gameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gameInclude<ExtArgs> | null
    where?: gameWhereInput
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[]
    cursor?: gameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * user.invitation
   */
  export type user$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    where?: invitationWhereInput
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    cursor?: invitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * user.notification_notification_recipientIdTouser
   */
  export type user$notification_notification_recipientIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user.notification_notification_senderIdTouser
   */
  export type user$notification_notification_senderIdTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: number | null
  }

  export type InvitationSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: number | null
    status: $Enums.invitation_status | null
    attendanceStatus: $Enums.attendance_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: number | null
    status: $Enums.invitation_status | null
    attendanceStatus: $Enums.attendance_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    status: number
    attendanceStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
  }

  export type InvitationSumAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    attendanceStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    attendanceStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    status?: true
    attendanceStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitation to aggregate.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type invitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invitationWhereInput
    orderBy?: invitationOrderByWithAggregationInput | invitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: invitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: number
    gameId: number
    userId: number
    status: $Enums.invitation_status
    attendanceStatus: $Enums.attendance_status | null
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends invitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type invitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    attendanceStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game?: boolean | gameDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>



  export type invitationSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    status?: boolean
    attendanceStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type invitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "status" | "attendanceStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type invitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $invitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invitation"
    objects: {
      game: Prisma.$gamePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      userId: number
      status: $Enums.invitation_status
      attendanceStatus: $Enums.attendance_status | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type invitationGetPayload<S extends boolean | null | undefined | invitationDefaultArgs> = $Result.GetResult<Prisma.$invitationPayload, S>

  type invitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface invitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invitation'], meta: { name: 'invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {invitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invitationFindUniqueArgs>(args: SelectSubset<T, invitationFindUniqueArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invitationFindUniqueOrThrowArgs>(args: SelectSubset<T, invitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invitationFindFirstArgs>(args?: SelectSubset<T, invitationFindFirstArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invitationFindFirstOrThrowArgs>(args?: SelectSubset<T, invitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invitationFindManyArgs>(args?: SelectSubset<T, invitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {invitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends invitationCreateArgs>(args: SelectSubset<T, invitationCreateArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {invitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invitationCreateManyArgs>(args?: SelectSubset<T, invitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {invitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends invitationDeleteArgs>(args: SelectSubset<T, invitationDeleteArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {invitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invitationUpdateArgs>(args: SelectSubset<T, invitationUpdateArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {invitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invitationDeleteManyArgs>(args?: SelectSubset<T, invitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invitationUpdateManyArgs>(args: SelectSubset<T, invitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {invitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends invitationUpsertArgs>(args: SelectSubset<T, invitationUpsertArgs<ExtArgs>>): Prisma__invitationClient<$Result.GetResult<Prisma.$invitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends invitationCountArgs>(
      args?: Subset<T, invitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invitationGroupByArgs['orderBy'] }
        : { orderBy?: invitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invitation model
   */
  readonly fields: invitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends gameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gameDefaultArgs<ExtArgs>>): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invitation model
   */
  interface invitationFieldRefs {
    readonly id: FieldRef<"invitation", 'Int'>
    readonly gameId: FieldRef<"invitation", 'Int'>
    readonly userId: FieldRef<"invitation", 'Int'>
    readonly status: FieldRef<"invitation", 'invitation_status'>
    readonly attendanceStatus: FieldRef<"invitation", 'attendance_status'>
    readonly createdAt: FieldRef<"invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invitation findUnique
   */
  export type invitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation findUniqueOrThrow
   */
  export type invitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation findFirst
   */
  export type invitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation findFirstOrThrow
   */
  export type invitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitation to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation findMany
   */
  export type invitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter, which invitations to fetch.
     */
    where?: invitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invitations to fetch.
     */
    orderBy?: invitationOrderByWithRelationInput | invitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invitations.
     */
    cursor?: invitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * invitation create
   */
  export type invitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The data needed to create a invitation.
     */
    data: XOR<invitationCreateInput, invitationUncheckedCreateInput>
  }

  /**
   * invitation createMany
   */
  export type invitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invitations.
     */
    data: invitationCreateManyInput | invitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invitation update
   */
  export type invitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The data needed to update a invitation.
     */
    data: XOR<invitationUpdateInput, invitationUncheckedUpdateInput>
    /**
     * Choose, which invitation to update.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation updateMany
   */
  export type invitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invitations.
     */
    data: XOR<invitationUpdateManyMutationInput, invitationUncheckedUpdateManyInput>
    /**
     * Filter which invitations to update
     */
    where?: invitationWhereInput
    /**
     * Limit how many invitations to update.
     */
    limit?: number
  }

  /**
   * invitation upsert
   */
  export type invitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * The filter to search for the invitation to update in case it exists.
     */
    where: invitationWhereUniqueInput
    /**
     * In case the invitation found by the `where` argument doesn't exist, create a new invitation with this data.
     */
    create: XOR<invitationCreateInput, invitationUncheckedCreateInput>
    /**
     * In case the invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invitationUpdateInput, invitationUncheckedUpdateInput>
  }

  /**
   * invitation delete
   */
  export type invitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
    /**
     * Filter which invitation to delete.
     */
    where: invitationWhereUniqueInput
  }

  /**
   * invitation deleteMany
   */
  export type invitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invitations to delete
     */
    where?: invitationWhereInput
    /**
     * Limit how many invitations to delete.
     */
    limit?: number
  }

  /**
   * invitation without action
   */
  export type invitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invitation
     */
    select?: invitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invitation
     */
    omit?: invitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invitationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
    id: 'id',
    hostId: 'hostId',
    name: 'name',
    location: 'location',
    startTime: 'startTime',
    endTime: 'endTime',
    feeType: 'feeType',
    minReliabilityScore: 'minReliabilityScore',
    isCancelled: 'isCancelled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    recipientId: 'recipientId',
    senderId: 'senderId',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    gameId: 'gameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    reliabilityScore: 'reliabilityScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    status: 'status',
    attendanceStatus: 'attendanceStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const gameOrderByRelevanceFieldEnum: {
    name: 'name',
    location: 'location'
  };

  export type gameOrderByRelevanceFieldEnum = (typeof gameOrderByRelevanceFieldEnum)[keyof typeof gameOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const notificationOrderByRelevanceFieldEnum: {
    title: 'title',
    message: 'message'
  };

  export type notificationOrderByRelevanceFieldEnum = (typeof notificationOrderByRelevanceFieldEnum)[keyof typeof notificationOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'game_feeType'
   */
  export type Enumgame_feeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'game_feeType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'notification_type'
   */
  export type Enumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type'>
    


  /**
   * Reference to a field of type 'invitation_status'
   */
  export type Enuminvitation_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invitation_status'>
    


  /**
   * Reference to a field of type 'attendance_status'
   */
  export type Enumattendance_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attendance_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type gameWhereInput = {
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    id?: IntFilter<"game"> | number
    hostId?: IntFilter<"game"> | number
    name?: StringFilter<"game"> | string
    location?: StringFilter<"game"> | string
    startTime?: DateTimeFilter<"game"> | Date | string
    endTime?: DateTimeFilter<"game"> | Date | string
    feeType?: Enumgame_feeTypeFilter<"game"> | $Enums.game_feeType
    minReliabilityScore?: IntFilter<"game"> | number
    isCancelled?: BoolFilter<"game"> | boolean
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
    host?: XOR<UserScalarRelationFilter, userWhereInput>
    notification?: NotificationListRelationFilter
    invitation?: InvitationListRelationFilter
  }

  export type gameOrderByWithRelationInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    feeType?: SortOrder
    minReliabilityScore?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    host?: userOrderByWithRelationInput
    notification?: notificationOrderByRelationAggregateInput
    invitation?: invitationOrderByRelationAggregateInput
    _relevance?: gameOrderByRelevanceInput
  }

  export type gameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gameWhereInput | gameWhereInput[]
    OR?: gameWhereInput[]
    NOT?: gameWhereInput | gameWhereInput[]
    hostId?: IntFilter<"game"> | number
    name?: StringFilter<"game"> | string
    location?: StringFilter<"game"> | string
    startTime?: DateTimeFilter<"game"> | Date | string
    endTime?: DateTimeFilter<"game"> | Date | string
    feeType?: Enumgame_feeTypeFilter<"game"> | $Enums.game_feeType
    minReliabilityScore?: IntFilter<"game"> | number
    isCancelled?: BoolFilter<"game"> | boolean
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
    host?: XOR<UserScalarRelationFilter, userWhereInput>
    notification?: NotificationListRelationFilter
    invitation?: InvitationListRelationFilter
  }, "id">

  export type gameOrderByWithAggregationInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    feeType?: SortOrder
    minReliabilityScore?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: gameCountOrderByAggregateInput
    _avg?: gameAvgOrderByAggregateInput
    _max?: gameMaxOrderByAggregateInput
    _min?: gameMinOrderByAggregateInput
    _sum?: gameSumOrderByAggregateInput
  }

  export type gameScalarWhereWithAggregatesInput = {
    AND?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    OR?: gameScalarWhereWithAggregatesInput[]
    NOT?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"game"> | number
    hostId?: IntWithAggregatesFilter<"game"> | number
    name?: StringWithAggregatesFilter<"game"> | string
    location?: StringWithAggregatesFilter<"game"> | string
    startTime?: DateTimeWithAggregatesFilter<"game"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"game"> | Date | string
    feeType?: Enumgame_feeTypeWithAggregatesFilter<"game"> | $Enums.game_feeType
    minReliabilityScore?: IntWithAggregatesFilter<"game"> | number
    isCancelled?: BoolWithAggregatesFilter<"game"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"game"> | Date | string
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    gameId?: IntNullableFilter<"notification"> | number | null
    createdAt?: DateTimeFilter<"notification"> | Date | string
    updatedAt?: DateTimeFilter<"notification"> | Date | string
    game?: XOR<GameNullableScalarRelationFilter, gameWhereInput> | null
    user_notification_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_notification_senderIdTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    gameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: gameOrderByWithRelationInput
    user_notification_recipientIdTouser?: userOrderByWithRelationInput
    user_notification_senderIdTouser?: userOrderByWithRelationInput
    _relevance?: notificationOrderByRelevanceInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    gameId?: IntNullableFilter<"notification"> | number | null
    createdAt?: DateTimeFilter<"notification"> | Date | string
    updatedAt?: DateTimeFilter<"notification"> | Date | string
    game?: XOR<GameNullableScalarRelationFilter, gameWhereInput> | null
    user_notification_recipientIdTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_notification_senderIdTouser?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    gameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    recipientId?: IntWithAggregatesFilter<"notification"> | number
    senderId?: IntNullableWithAggregatesFilter<"notification"> | number | null
    type?: Enumnotification_typeWithAggregatesFilter<"notification"> | $Enums.notification_type
    title?: StringWithAggregatesFilter<"notification"> | string
    message?: StringWithAggregatesFilter<"notification"> | string
    isRead?: BoolWithAggregatesFilter<"notification"> | boolean
    gameId?: IntNullableWithAggregatesFilter<"notification"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"notification"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    reliabilityScore?: IntFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    hostedGame?: GameListRelationFilter
    invitation?: InvitationListRelationFilter
    notification_notification_recipientIdTouser?: NotificationListRelationFilter
    notification_notification_senderIdTouser?: NotificationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    reliabilityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostedGame?: gameOrderByRelationAggregateInput
    invitation?: invitationOrderByRelationAggregateInput
    notification_notification_recipientIdTouser?: notificationOrderByRelationAggregateInput
    notification_notification_senderIdTouser?: notificationOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    reliabilityScore?: IntFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    hostedGame?: GameListRelationFilter
    invitation?: InvitationListRelationFilter
    notification_notification_recipientIdTouser?: NotificationListRelationFilter
    notification_notification_senderIdTouser?: NotificationListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    reliabilityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    passwordHash?: StringWithAggregatesFilter<"user"> | string
    reliabilityScore?: IntWithAggregatesFilter<"user"> | number
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type invitationWhereInput = {
    AND?: invitationWhereInput | invitationWhereInput[]
    OR?: invitationWhereInput[]
    NOT?: invitationWhereInput | invitationWhereInput[]
    id?: IntFilter<"invitation"> | number
    gameId?: IntFilter<"invitation"> | number
    userId?: IntFilter<"invitation"> | number
    status?: Enuminvitation_statusFilter<"invitation"> | $Enums.invitation_status
    attendanceStatus?: Enumattendance_statusNullableFilter<"invitation"> | $Enums.attendance_status | null
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
    game?: XOR<GameScalarRelationFilter, gameWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type invitationOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    attendanceStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game?: gameOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type invitationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gameId_userId?: invitationGameIdUserIdCompoundUniqueInput
    AND?: invitationWhereInput | invitationWhereInput[]
    OR?: invitationWhereInput[]
    NOT?: invitationWhereInput | invitationWhereInput[]
    gameId?: IntFilter<"invitation"> | number
    userId?: IntFilter<"invitation"> | number
    status?: Enuminvitation_statusFilter<"invitation"> | $Enums.invitation_status
    attendanceStatus?: Enumattendance_statusNullableFilter<"invitation"> | $Enums.attendance_status | null
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
    game?: XOR<GameScalarRelationFilter, gameWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "gameId_userId">

  export type invitationOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    attendanceStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: invitationCountOrderByAggregateInput
    _avg?: invitationAvgOrderByAggregateInput
    _max?: invitationMaxOrderByAggregateInput
    _min?: invitationMinOrderByAggregateInput
    _sum?: invitationSumOrderByAggregateInput
  }

  export type invitationScalarWhereWithAggregatesInput = {
    AND?: invitationScalarWhereWithAggregatesInput | invitationScalarWhereWithAggregatesInput[]
    OR?: invitationScalarWhereWithAggregatesInput[]
    NOT?: invitationScalarWhereWithAggregatesInput | invitationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invitation"> | number
    gameId?: IntWithAggregatesFilter<"invitation"> | number
    userId?: IntWithAggregatesFilter<"invitation"> | number
    status?: Enuminvitation_statusWithAggregatesFilter<"invitation"> | $Enums.invitation_status
    attendanceStatus?: Enumattendance_statusNullableWithAggregatesFilter<"invitation"> | $Enums.attendance_status | null
    createdAt?: DateTimeWithAggregatesFilter<"invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"invitation"> | Date | string
  }

  export type gameCreateInput = {
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    host: userCreateNestedOneWithoutHostedGameInput
    notification?: notificationCreateNestedManyWithoutGameInput
    invitation?: invitationCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateInput = {
    id?: number
    hostId: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: notificationUncheckedCreateNestedManyWithoutGameInput
    invitation?: invitationUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: userUpdateOneRequiredWithoutHostedGameNestedInput
    notification?: notificationUpdateManyWithoutGameNestedInput
    invitation?: invitationUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: notificationUncheckedUpdateManyWithoutGameNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameCreateManyInput = {
    id?: number
    hostId: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateInput = {
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    game?: gameCreateNestedOneWithoutNotificationInput
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
    user_notification_senderIdTouser?: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    recipientId: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationUpdateInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneWithoutNotificationNestedInput
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
    user_notification_senderIdTouser?: userUpdateOneWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateManyInput = {
    id?: number
    recipientId: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationUpdateManyMutationInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameCreateNestedManyWithoutHostInput
    invitation?: invitationCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameUncheckedCreateNestedManyWithoutHostInput
    invitation?: invitationUncheckedCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUpdateManyWithoutHostNestedInput
    invitation?: invitationUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUncheckedUpdateManyWithoutHostNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationCreateInput = {
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: gameCreateNestedOneWithoutInvitationInput
    user: userCreateNestedOneWithoutInvitationInput
  }

  export type invitationUncheckedCreateInput = {
    id?: number
    gameId: number
    userId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationUpdateInput = {
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneRequiredWithoutInvitationNestedInput
    user?: userUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type invitationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationCreateManyInput = {
    id?: number
    gameId: number
    userId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationUpdateManyMutationInput = {
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumgame_feeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.game_feeType | Enumgame_feeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.game_feeType[]
    notIn?: $Enums.game_feeType[]
    not?: NestedEnumgame_feeTypeFilter<$PrismaModel> | $Enums.game_feeType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: invitationWhereInput
    some?: invitationWhereInput
    none?: invitationWhereInput
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gameOrderByRelevanceInput = {
    fields: gameOrderByRelevanceFieldEnum | gameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gameCountOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    feeType?: SortOrder
    minReliabilityScore?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameAvgOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    minReliabilityScore?: SortOrder
  }

  export type gameMaxOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    feeType?: SortOrder
    minReliabilityScore?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameMinOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    feeType?: SortOrder
    minReliabilityScore?: SortOrder
    isCancelled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gameSumOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    minReliabilityScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumgame_feeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.game_feeType | Enumgame_feeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.game_feeType[]
    notIn?: $Enums.game_feeType[]
    not?: NestedEnumgame_feeTypeWithAggregatesFilter<$PrismaModel> | $Enums.game_feeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgame_feeTypeFilter<$PrismaModel>
    _max?: NestedEnumgame_feeTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type GameNullableScalarRelationFilter = {
    is?: gameWhereInput | null
    isNot?: gameWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type notificationOrderByRelevanceInput = {
    fields: notificationOrderByRelevanceFieldEnum | notificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    gameId?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    senderId?: SortOrder
    gameId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: gameWhereInput
    some?: gameWhereInput
    none?: gameWhereInput
  }

  export type gameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    reliabilityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    reliabilityScore?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    reliabilityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    reliabilityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    reliabilityScore?: SortOrder
  }

  export type Enuminvitation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invitation_status | Enuminvitation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.invitation_status[]
    notIn?: $Enums.invitation_status[]
    not?: NestedEnuminvitation_statusFilter<$PrismaModel> | $Enums.invitation_status
  }

  export type Enumattendance_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.attendance_status[] | null
    notIn?: $Enums.attendance_status[] | null
    not?: NestedEnumattendance_statusNullableFilter<$PrismaModel> | $Enums.attendance_status | null
  }

  export type GameScalarRelationFilter = {
    is?: gameWhereInput
    isNot?: gameWhereInput
  }

  export type invitationGameIdUserIdCompoundUniqueInput = {
    gameId: number
    userId: number
  }

  export type invitationCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    attendanceStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
  }

  export type invitationMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    attendanceStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    attendanceStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type invitationSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
  }

  export type Enuminvitation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invitation_status | Enuminvitation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.invitation_status[]
    notIn?: $Enums.invitation_status[]
    not?: NestedEnuminvitation_statusWithAggregatesFilter<$PrismaModel> | $Enums.invitation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvitation_statusFilter<$PrismaModel>
    _max?: NestedEnuminvitation_statusFilter<$PrismaModel>
  }

  export type Enumattendance_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.attendance_status[] | null
    notIn?: $Enums.attendance_status[] | null
    not?: NestedEnumattendance_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.attendance_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumattendance_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumattendance_statusNullableFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutHostedGameInput = {
    create?: XOR<userCreateWithoutHostedGameInput, userUncheckedCreateWithoutHostedGameInput>
    connectOrCreate?: userCreateOrConnectWithoutHostedGameInput
    connect?: userWhereUniqueInput
  }

  export type notificationCreateNestedManyWithoutGameInput = {
    create?: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput> | notificationCreateWithoutGameInput[] | notificationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGameInput | notificationCreateOrConnectWithoutGameInput[]
    createMany?: notificationCreateManyGameInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type invitationCreateNestedManyWithoutGameInput = {
    create?: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput> | invitationCreateWithoutGameInput[] | invitationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutGameInput | invitationCreateOrConnectWithoutGameInput[]
    createMany?: invitationCreateManyGameInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput> | notificationCreateWithoutGameInput[] | notificationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGameInput | notificationCreateOrConnectWithoutGameInput[]
    createMany?: notificationCreateManyGameInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type invitationUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput> | invitationCreateWithoutGameInput[] | invitationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutGameInput | invitationCreateOrConnectWithoutGameInput[]
    createMany?: invitationCreateManyGameInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumgame_feeTypeFieldUpdateOperationsInput = {
    set?: $Enums.game_feeType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutHostedGameNestedInput = {
    create?: XOR<userCreateWithoutHostedGameInput, userUncheckedCreateWithoutHostedGameInput>
    connectOrCreate?: userCreateOrConnectWithoutHostedGameInput
    upsert?: userUpsertWithoutHostedGameInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHostedGameInput, userUpdateWithoutHostedGameInput>, userUncheckedUpdateWithoutHostedGameInput>
  }

  export type notificationUpdateManyWithoutGameNestedInput = {
    create?: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput> | notificationCreateWithoutGameInput[] | notificationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGameInput | notificationCreateOrConnectWithoutGameInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutGameInput | notificationUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: notificationCreateManyGameInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutGameInput | notificationUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutGameInput | notificationUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type invitationUpdateManyWithoutGameNestedInput = {
    create?: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput> | invitationCreateWithoutGameInput[] | invitationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutGameInput | invitationCreateOrConnectWithoutGameInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutGameInput | invitationUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: invitationCreateManyGameInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutGameInput | invitationUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutGameInput | invitationUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput> | notificationCreateWithoutGameInput[] | notificationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGameInput | notificationCreateOrConnectWithoutGameInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutGameInput | notificationUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: notificationCreateManyGameInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutGameInput | notificationUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutGameInput | notificationUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type invitationUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput> | invitationCreateWithoutGameInput[] | invitationUncheckedCreateWithoutGameInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutGameInput | invitationCreateOrConnectWithoutGameInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutGameInput | invitationUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: invitationCreateManyGameInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutGameInput | invitationUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutGameInput | invitationUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type gameCreateNestedOneWithoutNotificationInput = {
    create?: XOR<gameCreateWithoutNotificationInput, gameUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: gameCreateOrConnectWithoutNotificationInput
    connect?: gameWhereUniqueInput
  }

  export type userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput = {
    create?: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutNotification_notification_senderIdTouserInput = {
    create?: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_senderIdTouserInput
    connect?: userWhereUniqueInput
  }

  export type Enumnotification_typeFieldUpdateOperationsInput = {
    set?: $Enums.notification_type
  }

  export type gameUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<gameCreateWithoutNotificationInput, gameUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: gameCreateOrConnectWithoutNotificationInput
    upsert?: gameUpsertWithoutNotificationInput
    disconnect?: gameWhereInput | boolean
    delete?: gameWhereInput | boolean
    connect?: gameWhereUniqueInput
    update?: XOR<XOR<gameUpdateToOneWithWhereWithoutNotificationInput, gameUpdateWithoutNotificationInput>, gameUncheckedUpdateWithoutNotificationInput>
  }

  export type userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput = {
    create?: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput
    upsert?: userUpsertWithoutNotification_notification_recipientIdTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotification_notification_recipientIdTouserInput, userUpdateWithoutNotification_notification_recipientIdTouserInput>, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userUpdateOneWithoutNotification_notification_senderIdTouserNestedInput = {
    create?: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutNotification_notification_senderIdTouserInput
    upsert?: userUpsertWithoutNotification_notification_senderIdTouserInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotification_notification_senderIdTouserInput, userUpdateWithoutNotification_notification_senderIdTouserInput>, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type gameCreateNestedManyWithoutHostInput = {
    create?: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput> | gameCreateWithoutHostInput[] | gameUncheckedCreateWithoutHostInput[]
    connectOrCreate?: gameCreateOrConnectWithoutHostInput | gameCreateOrConnectWithoutHostInput[]
    createMany?: gameCreateManyHostInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type invitationCreateNestedManyWithoutUserInput = {
    create?: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput> | invitationCreateWithoutUserInput[] | invitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutUserInput | invitationCreateOrConnectWithoutUserInput[]
    createMany?: invitationCreateManyUserInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type gameUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput> | gameCreateWithoutHostInput[] | gameUncheckedCreateWithoutHostInput[]
    connectOrCreate?: gameCreateOrConnectWithoutHostInput | gameCreateOrConnectWithoutHostInput[]
    createMany?: gameCreateManyHostInputEnvelope
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
  }

  export type invitationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput> | invitationCreateWithoutUserInput[] | invitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutUserInput | invitationCreateOrConnectWithoutUserInput[]
    createMany?: invitationCreateManyUserInputEnvelope
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type gameUpdateManyWithoutHostNestedInput = {
    create?: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput> | gameCreateWithoutHostInput[] | gameUncheckedCreateWithoutHostInput[]
    connectOrCreate?: gameCreateOrConnectWithoutHostInput | gameCreateOrConnectWithoutHostInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutHostInput | gameUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: gameCreateManyHostInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutHostInput | gameUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: gameUpdateManyWithWhereWithoutHostInput | gameUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type invitationUpdateManyWithoutUserNestedInput = {
    create?: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput> | invitationCreateWithoutUserInput[] | invitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutUserInput | invitationCreateOrConnectWithoutUserInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutUserInput | invitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invitationCreateManyUserInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutUserInput | invitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutUserInput | invitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type gameUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput> | gameCreateWithoutHostInput[] | gameUncheckedCreateWithoutHostInput[]
    connectOrCreate?: gameCreateOrConnectWithoutHostInput | gameCreateOrConnectWithoutHostInput[]
    upsert?: gameUpsertWithWhereUniqueWithoutHostInput | gameUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: gameCreateManyHostInputEnvelope
    set?: gameWhereUniqueInput | gameWhereUniqueInput[]
    disconnect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    delete?: gameWhereUniqueInput | gameWhereUniqueInput[]
    connect?: gameWhereUniqueInput | gameWhereUniqueInput[]
    update?: gameUpdateWithWhereUniqueWithoutHostInput | gameUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: gameUpdateManyWithWhereWithoutHostInput | gameUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: gameScalarWhereInput | gameScalarWhereInput[]
  }

  export type invitationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput> | invitationCreateWithoutUserInput[] | invitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invitationCreateOrConnectWithoutUserInput | invitationCreateOrConnectWithoutUserInput[]
    upsert?: invitationUpsertWithWhereUniqueWithoutUserInput | invitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invitationCreateManyUserInputEnvelope
    set?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    disconnect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    delete?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    connect?: invitationWhereUniqueInput | invitationWhereUniqueInput[]
    update?: invitationUpdateWithWhereUniqueWithoutUserInput | invitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invitationUpdateManyWithWhereWithoutUserInput | invitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invitationScalarWhereInput | invitationScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput> | notificationCreateWithoutUser_notification_recipientIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput | notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_recipientIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput = {
    create?: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput> | notificationCreateWithoutUser_notification_senderIdTouserInput[] | notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput | notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    createMany?: notificationCreateManyUser_notification_senderIdTouserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput | notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput | notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type gameCreateNestedOneWithoutInvitationInput = {
    create?: XOR<gameCreateWithoutInvitationInput, gameUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: gameCreateOrConnectWithoutInvitationInput
    connect?: gameWhereUniqueInput
  }

  export type userCreateNestedOneWithoutInvitationInput = {
    create?: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: userCreateOrConnectWithoutInvitationInput
    connect?: userWhereUniqueInput
  }

  export type Enuminvitation_statusFieldUpdateOperationsInput = {
    set?: $Enums.invitation_status
  }

  export type NullableEnumattendance_statusFieldUpdateOperationsInput = {
    set?: $Enums.attendance_status | null
  }

  export type gameUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<gameCreateWithoutInvitationInput, gameUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: gameCreateOrConnectWithoutInvitationInput
    upsert?: gameUpsertWithoutInvitationInput
    connect?: gameWhereUniqueInput
    update?: XOR<XOR<gameUpdateToOneWithWhereWithoutInvitationInput, gameUpdateWithoutInvitationInput>, gameUncheckedUpdateWithoutInvitationInput>
  }

  export type userUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: userCreateOrConnectWithoutInvitationInput
    upsert?: userUpsertWithoutInvitationInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInvitationInput, userUpdateWithoutInvitationInput>, userUncheckedUpdateWithoutInvitationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumgame_feeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.game_feeType | Enumgame_feeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.game_feeType[]
    notIn?: $Enums.game_feeType[]
    not?: NestedEnumgame_feeTypeFilter<$PrismaModel> | $Enums.game_feeType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumgame_feeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.game_feeType | Enumgame_feeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.game_feeType[]
    notIn?: $Enums.game_feeType[]
    not?: NestedEnumgame_feeTypeWithAggregatesFilter<$PrismaModel> | $Enums.game_feeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgame_feeTypeFilter<$PrismaModel>
    _max?: NestedEnumgame_feeTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type NestedEnuminvitation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invitation_status | Enuminvitation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.invitation_status[]
    notIn?: $Enums.invitation_status[]
    not?: NestedEnuminvitation_statusFilter<$PrismaModel> | $Enums.invitation_status
  }

  export type NestedEnumattendance_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.attendance_status[] | null
    notIn?: $Enums.attendance_status[] | null
    not?: NestedEnumattendance_statusNullableFilter<$PrismaModel> | $Enums.attendance_status | null
  }

  export type NestedEnuminvitation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invitation_status | Enuminvitation_statusFieldRefInput<$PrismaModel>
    in?: $Enums.invitation_status[]
    notIn?: $Enums.invitation_status[]
    not?: NestedEnuminvitation_statusWithAggregatesFilter<$PrismaModel> | $Enums.invitation_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvitation_statusFilter<$PrismaModel>
    _max?: NestedEnuminvitation_statusFilter<$PrismaModel>
  }

  export type NestedEnumattendance_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.attendance_status[] | null
    notIn?: $Enums.attendance_status[] | null
    not?: NestedEnumattendance_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.attendance_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumattendance_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumattendance_statusNullableFilter<$PrismaModel>
  }

  export type userCreateWithoutHostedGameInput = {
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    invitation?: invitationCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userUncheckedCreateWithoutHostedGameInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    invitation?: invitationUncheckedCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userCreateOrConnectWithoutHostedGameInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHostedGameInput, userUncheckedCreateWithoutHostedGameInput>
  }

  export type notificationCreateWithoutGameInput = {
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
    user_notification_senderIdTouser?: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateWithoutGameInput = {
    id?: number
    recipientId: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationCreateOrConnectWithoutGameInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput>
  }

  export type notificationCreateManyGameInputEnvelope = {
    data: notificationCreateManyGameInput | notificationCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type invitationCreateWithoutGameInput = {
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutInvitationInput
  }

  export type invitationUncheckedCreateWithoutGameInput = {
    id?: number
    userId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationCreateOrConnectWithoutGameInput = {
    where: invitationWhereUniqueInput
    create: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput>
  }

  export type invitationCreateManyGameInputEnvelope = {
    data: invitationCreateManyGameInput | invitationCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutHostedGameInput = {
    update: XOR<userUpdateWithoutHostedGameInput, userUncheckedUpdateWithoutHostedGameInput>
    create: XOR<userCreateWithoutHostedGameInput, userUncheckedCreateWithoutHostedGameInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHostedGameInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHostedGameInput, userUncheckedUpdateWithoutHostedGameInput>
  }

  export type userUpdateWithoutHostedGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: invitationUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutHostedGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: invitationUncheckedUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type notificationUpsertWithWhereUniqueWithoutGameInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutGameInput, notificationUncheckedUpdateWithoutGameInput>
    create: XOR<notificationCreateWithoutGameInput, notificationUncheckedCreateWithoutGameInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutGameInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutGameInput, notificationUncheckedUpdateWithoutGameInput>
  }

  export type notificationUpdateManyWithWhereWithoutGameInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutGameInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    recipientId?: IntFilter<"notification"> | number
    senderId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    title?: StringFilter<"notification"> | string
    message?: StringFilter<"notification"> | string
    isRead?: BoolFilter<"notification"> | boolean
    gameId?: IntNullableFilter<"notification"> | number | null
    createdAt?: DateTimeFilter<"notification"> | Date | string
    updatedAt?: DateTimeFilter<"notification"> | Date | string
  }

  export type invitationUpsertWithWhereUniqueWithoutGameInput = {
    where: invitationWhereUniqueInput
    update: XOR<invitationUpdateWithoutGameInput, invitationUncheckedUpdateWithoutGameInput>
    create: XOR<invitationCreateWithoutGameInput, invitationUncheckedCreateWithoutGameInput>
  }

  export type invitationUpdateWithWhereUniqueWithoutGameInput = {
    where: invitationWhereUniqueInput
    data: XOR<invitationUpdateWithoutGameInput, invitationUncheckedUpdateWithoutGameInput>
  }

  export type invitationUpdateManyWithWhereWithoutGameInput = {
    where: invitationScalarWhereInput
    data: XOR<invitationUpdateManyMutationInput, invitationUncheckedUpdateManyWithoutGameInput>
  }

  export type invitationScalarWhereInput = {
    AND?: invitationScalarWhereInput | invitationScalarWhereInput[]
    OR?: invitationScalarWhereInput[]
    NOT?: invitationScalarWhereInput | invitationScalarWhereInput[]
    id?: IntFilter<"invitation"> | number
    gameId?: IntFilter<"invitation"> | number
    userId?: IntFilter<"invitation"> | number
    status?: Enuminvitation_statusFilter<"invitation"> | $Enums.invitation_status
    attendanceStatus?: Enumattendance_statusNullableFilter<"invitation"> | $Enums.attendance_status | null
    createdAt?: DateTimeFilter<"invitation"> | Date | string
    updatedAt?: DateTimeFilter<"invitation"> | Date | string
  }

  export type gameCreateWithoutNotificationInput = {
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    host: userCreateNestedOneWithoutHostedGameInput
    invitation?: invitationCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutNotificationInput = {
    id?: number
    hostId: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation?: invitationUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutNotificationInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutNotificationInput, gameUncheckedCreateWithoutNotificationInput>
  }

  export type userCreateWithoutNotification_notification_recipientIdTouserInput = {
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameCreateNestedManyWithoutHostInput
    invitation?: invitationCreateNestedManyWithoutUserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameUncheckedCreateNestedManyWithoutHostInput
    invitation?: invitationUncheckedCreateNestedManyWithoutUserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userCreateOrConnectWithoutNotification_notification_recipientIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userCreateWithoutNotification_notification_senderIdTouserInput = {
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameCreateNestedManyWithoutHostInput
    invitation?: invitationCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
  }

  export type userUncheckedCreateWithoutNotification_notification_senderIdTouserInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameUncheckedCreateNestedManyWithoutHostInput
    invitation?: invitationUncheckedCreateNestedManyWithoutUserInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
  }

  export type userCreateOrConnectWithoutNotification_notification_senderIdTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
  }

  export type gameUpsertWithoutNotificationInput = {
    update: XOR<gameUpdateWithoutNotificationInput, gameUncheckedUpdateWithoutNotificationInput>
    create: XOR<gameCreateWithoutNotificationInput, gameUncheckedCreateWithoutNotificationInput>
    where?: gameWhereInput
  }

  export type gameUpdateToOneWithWhereWithoutNotificationInput = {
    where?: gameWhereInput
    data: XOR<gameUpdateWithoutNotificationInput, gameUncheckedUpdateWithoutNotificationInput>
  }

  export type gameUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: userUpdateOneRequiredWithoutHostedGameNestedInput
    invitation?: invitationUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: invitationUncheckedUpdateManyWithoutGameNestedInput
  }

  export type userUpsertWithoutNotification_notification_recipientIdTouserInput = {
    update: XOR<userUpdateWithoutNotification_notification_recipientIdTouserInput, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
    create: XOR<userCreateWithoutNotification_notification_recipientIdTouserInput, userUncheckedCreateWithoutNotification_notification_recipientIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotification_notification_recipientIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotification_notification_recipientIdTouserInput, userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput>
  }

  export type userUpdateWithoutNotification_notification_recipientIdTouserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUpdateManyWithoutHostNestedInput
    invitation?: invitationUpdateManyWithoutUserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutNotification_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUncheckedUpdateManyWithoutHostNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutUserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userUpsertWithoutNotification_notification_senderIdTouserInput = {
    update: XOR<userUpdateWithoutNotification_notification_senderIdTouserInput, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
    create: XOR<userCreateWithoutNotification_notification_senderIdTouserInput, userUncheckedCreateWithoutNotification_notification_senderIdTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotification_notification_senderIdTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotification_notification_senderIdTouserInput, userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput>
  }

  export type userUpdateWithoutNotification_notification_senderIdTouserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUpdateManyWithoutHostNestedInput
    invitation?: invitationUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutNotification_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUncheckedUpdateManyWithoutHostNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutUserNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
  }

  export type gameCreateWithoutHostInput = {
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: notificationCreateNestedManyWithoutGameInput
    invitation?: invitationCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutHostInput = {
    id?: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: notificationUncheckedCreateNestedManyWithoutGameInput
    invitation?: invitationUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutHostInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput>
  }

  export type gameCreateManyHostInputEnvelope = {
    data: gameCreateManyHostInput | gameCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type invitationCreateWithoutUserInput = {
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: gameCreateNestedOneWithoutInvitationInput
  }

  export type invitationUncheckedCreateWithoutUserInput = {
    id?: number
    gameId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationCreateOrConnectWithoutUserInput = {
    where: invitationWhereUniqueInput
    create: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput>
  }

  export type invitationCreateManyUserInputEnvelope = {
    data: invitationCreateManyUserInput | invitationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUser_notification_recipientIdTouserInput = {
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    game?: gameCreateNestedOneWithoutNotificationInput
    user_notification_senderIdTouser?: userCreateNestedOneWithoutNotification_notification_senderIdTouserInput
  }

  export type notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput = {
    id?: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationCreateOrConnectWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationCreateManyUser_notification_recipientIdTouserInputEnvelope = {
    data: notificationCreateManyUser_notification_recipientIdTouserInput | notificationCreateManyUser_notification_recipientIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUser_notification_senderIdTouserInput = {
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    game?: gameCreateNestedOneWithoutNotificationInput
    user_notification_recipientIdTouser: userCreateNestedOneWithoutNotification_notification_recipientIdTouserInput
  }

  export type notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput = {
    id?: number
    recipientId: number
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationCreateOrConnectWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationCreateManyUser_notification_senderIdTouserInputEnvelope = {
    data: notificationCreateManyUser_notification_senderIdTouserInput | notificationCreateManyUser_notification_senderIdTouserInput[]
    skipDuplicates?: boolean
  }

  export type gameUpsertWithWhereUniqueWithoutHostInput = {
    where: gameWhereUniqueInput
    update: XOR<gameUpdateWithoutHostInput, gameUncheckedUpdateWithoutHostInput>
    create: XOR<gameCreateWithoutHostInput, gameUncheckedCreateWithoutHostInput>
  }

  export type gameUpdateWithWhereUniqueWithoutHostInput = {
    where: gameWhereUniqueInput
    data: XOR<gameUpdateWithoutHostInput, gameUncheckedUpdateWithoutHostInput>
  }

  export type gameUpdateManyWithWhereWithoutHostInput = {
    where: gameScalarWhereInput
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyWithoutHostInput>
  }

  export type gameScalarWhereInput = {
    AND?: gameScalarWhereInput | gameScalarWhereInput[]
    OR?: gameScalarWhereInput[]
    NOT?: gameScalarWhereInput | gameScalarWhereInput[]
    id?: IntFilter<"game"> | number
    hostId?: IntFilter<"game"> | number
    name?: StringFilter<"game"> | string
    location?: StringFilter<"game"> | string
    startTime?: DateTimeFilter<"game"> | Date | string
    endTime?: DateTimeFilter<"game"> | Date | string
    feeType?: Enumgame_feeTypeFilter<"game"> | $Enums.game_feeType
    minReliabilityScore?: IntFilter<"game"> | number
    isCancelled?: BoolFilter<"game"> | boolean
    createdAt?: DateTimeFilter<"game"> | Date | string
    updatedAt?: DateTimeFilter<"game"> | Date | string
  }

  export type invitationUpsertWithWhereUniqueWithoutUserInput = {
    where: invitationWhereUniqueInput
    update: XOR<invitationUpdateWithoutUserInput, invitationUncheckedUpdateWithoutUserInput>
    create: XOR<invitationCreateWithoutUserInput, invitationUncheckedCreateWithoutUserInput>
  }

  export type invitationUpdateWithWhereUniqueWithoutUserInput = {
    where: invitationWhereUniqueInput
    data: XOR<invitationUpdateWithoutUserInput, invitationUncheckedUpdateWithoutUserInput>
  }

  export type invitationUpdateManyWithWhereWithoutUserInput = {
    where: invitationScalarWhereInput
    data: XOR<invitationUpdateManyMutationInput, invitationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput>
    create: XOR<notificationCreateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedCreateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUser_notification_recipientIdTouserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUser_notification_recipientIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUser_notification_recipientIdTouserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUser_notification_senderIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput>
    create: XOR<notificationCreateWithoutUser_notification_senderIdTouserInput, notificationUncheckedCreateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUser_notification_senderIdTouserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUser_notification_senderIdTouserInput, notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUser_notification_senderIdTouserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserInput>
  }

  export type gameCreateWithoutInvitationInput = {
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    host: userCreateNestedOneWithoutHostedGameInput
    notification?: notificationCreateNestedManyWithoutGameInput
  }

  export type gameUncheckedCreateWithoutInvitationInput = {
    id?: number
    hostId: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    notification?: notificationUncheckedCreateNestedManyWithoutGameInput
  }

  export type gameCreateOrConnectWithoutInvitationInput = {
    where: gameWhereUniqueInput
    create: XOR<gameCreateWithoutInvitationInput, gameUncheckedCreateWithoutInvitationInput>
  }

  export type userCreateWithoutInvitationInput = {
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameCreateNestedManyWithoutHostInput
    notification_notification_recipientIdTouser?: notificationCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userUncheckedCreateWithoutInvitationInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    reliabilityScore?: number
    createdAt?: Date | string
    updatedAt: Date | string
    hostedGame?: gameUncheckedCreateNestedManyWithoutHostInput
    notification_notification_recipientIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_recipientIdTouserInput
    notification_notification_senderIdTouser?: notificationUncheckedCreateNestedManyWithoutUser_notification_senderIdTouserInput
  }

  export type userCreateOrConnectWithoutInvitationInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
  }

  export type gameUpsertWithoutInvitationInput = {
    update: XOR<gameUpdateWithoutInvitationInput, gameUncheckedUpdateWithoutInvitationInput>
    create: XOR<gameCreateWithoutInvitationInput, gameUncheckedCreateWithoutInvitationInput>
    where?: gameWhereInput
  }

  export type gameUpdateToOneWithWhereWithoutInvitationInput = {
    where?: gameWhereInput
    data: XOR<gameUpdateWithoutInvitationInput, gameUncheckedUpdateWithoutInvitationInput>
  }

  export type gameUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: userUpdateOneRequiredWithoutHostedGameNestedInput
    notification?: notificationUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    hostId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: notificationUncheckedUpdateManyWithoutGameNestedInput
  }

  export type userUpsertWithoutInvitationInput = {
    update: XOR<userUpdateWithoutInvitationInput, userUncheckedUpdateWithoutInvitationInput>
    create: XOR<userCreateWithoutInvitationInput, userUncheckedCreateWithoutInvitationInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInvitationInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInvitationInput, userUncheckedUpdateWithoutInvitationInput>
  }

  export type userUpdateWithoutInvitationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUpdateManyWithoutHostNestedInput
    notification_notification_recipientIdTouser?: notificationUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type userUncheckedUpdateWithoutInvitationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    reliabilityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostedGame?: gameUncheckedUpdateManyWithoutHostNestedInput
    notification_notification_recipientIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserNestedInput
    notification_notification_senderIdTouser?: notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserNestedInput
  }

  export type notificationCreateManyGameInput = {
    id?: number
    recipientId: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type invitationCreateManyGameInput = {
    id?: number
    userId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notificationUpdateWithoutGameInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
    user_notification_senderIdTouser?: userUpdateOneWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUpdateWithoutGameInput = {
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type invitationUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gameCreateManyHostInput = {
    id?: number
    name: string
    location: string
    startTime: Date | string
    endTime: Date | string
    feeType?: $Enums.game_feeType
    minReliabilityScore?: number
    isCancelled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type invitationCreateManyUserInput = {
    id?: number
    gameId: number
    status?: $Enums.invitation_status
    attendanceStatus?: $Enums.attendance_status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type notificationCreateManyUser_notification_recipientIdTouserInput = {
    id?: number
    senderId?: number | null
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type notificationCreateManyUser_notification_senderIdTouserInput = {
    id?: number
    recipientId: number
    type: $Enums.notification_type
    title: string
    message: string
    isRead?: boolean
    gameId?: number | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type gameUpdateWithoutHostInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: notificationUpdateManyWithoutGameNestedInput
    invitation?: invitationUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: notificationUncheckedUpdateManyWithoutGameNestedInput
    invitation?: invitationUncheckedUpdateManyWithoutGameNestedInput
  }

  export type gameUncheckedUpdateManyWithoutHostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    feeType?: Enumgame_feeTypeFieldUpdateOperationsInput | $Enums.game_feeType
    minReliabilityScore?: IntFieldUpdateOperationsInput | number
    isCancelled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUpdateWithoutUserInput = {
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type invitationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invitationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    status?: Enuminvitation_statusFieldUpdateOperationsInput | $Enums.invitation_status
    attendanceStatus?: NullableEnumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUpdateWithoutUser_notification_recipientIdTouserInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneWithoutNotificationNestedInput
    user_notification_senderIdTouser?: userUpdateOneWithoutNotification_notification_senderIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutUser_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_recipientIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUpdateWithoutUser_notification_senderIdTouserInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: gameUpdateOneWithoutNotificationNestedInput
    user_notification_recipientIdTouser?: userUpdateOneRequiredWithoutNotification_notification_recipientIdTouserNestedInput
  }

  export type notificationUncheckedUpdateWithoutUser_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutUser_notification_senderIdTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    gameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}