
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Establishment
 * 
 */
export type Establishment = $Result.DefaultSelection<Prisma.$EstablishmentPayload>
/**
 * Model EstablishmentClassification
 * 
 */
export type EstablishmentClassification = $Result.DefaultSelection<Prisma.$EstablishmentClassificationPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.establishment`: Exposes CRUD operations for the **Establishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Establishments
    * const establishments = await prisma.establishment.findMany()
    * ```
    */
  get establishment(): Prisma.EstablishmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.establishmentClassification`: Exposes CRUD operations for the **EstablishmentClassification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstablishmentClassifications
    * const establishmentClassifications = await prisma.establishmentClassification.findMany()
    * ```
    */
  get establishmentClassification(): Prisma.EstablishmentClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    Users: 'Users',
    Establishment: 'Establishment',
    EstablishmentClassification: 'EstablishmentClassification',
    Activity: 'Activity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "establishment" | "establishmentClassification" | "activity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Establishment: {
        payload: Prisma.$EstablishmentPayload<ExtArgs>
        fields: Prisma.EstablishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findMany: {
            args: Prisma.EstablishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          create: {
            args: Prisma.EstablishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          createMany: {
            args: Prisma.EstablishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          update: {
            args: Prisma.EstablishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstablishmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          upsert: {
            args: Prisma.EstablishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishment>
          }
          groupBy: {
            args: Prisma.EstablishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentCountAggregateOutputType> | number
          }
        }
      }
      EstablishmentClassification: {
        payload: Prisma.$EstablishmentClassificationPayload<ExtArgs>
        fields: Prisma.EstablishmentClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          findMany: {
            args: Prisma.EstablishmentClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>[]
          }
          create: {
            args: Prisma.EstablishmentClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          createMany: {
            args: Prisma.EstablishmentClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          update: {
            args: Prisma.EstablishmentClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstablishmentClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>[]
          }
          upsert: {
            args: Prisma.EstablishmentClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentClassificationPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishmentClassification>
          }
          groupBy: {
            args: Prisma.EstablishmentClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentClassificationCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    establishment?: EstablishmentOmit
    establishmentClassification?: EstablishmentClassificationOmit
    activity?: ActivityOmit
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
   * Count Type EstablishmentClassificationCountOutputType
   */

  export type EstablishmentClassificationCountOutputType = {
    establishments: number
  }

  export type EstablishmentClassificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishments?: boolean | EstablishmentClassificationCountOutputTypeCountEstablishmentsArgs
  }

  // Custom InputTypes
  /**
   * EstablishmentClassificationCountOutputType without action
   */
  export type EstablishmentClassificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassificationCountOutputType
     */
    select?: EstablishmentClassificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstablishmentClassificationCountOutputType without action
   */
  export type EstablishmentClassificationCountOutputTypeCountEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    mainEstablishments: number
    secondaryEstablishments: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainEstablishments?: boolean | ActivityCountOutputTypeCountMainEstablishmentsArgs
    secondaryEstablishments?: boolean | ActivityCountOutputTypeCountSecondaryEstablishmentsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountMainEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountSecondaryEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    failedLogins: number | null
  }

  export type UsersSumAggregateOutputType = {
    failedLogins: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    username: string | null
    cpf: string | null
    avatarUrl: string | null
    phone: string | null
    isActive: boolean | null
    role: $Enums.UserRole | null
    lastLogin: Date | null
    failedLogins: number | null
    emailVerified: Date | null
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    lastIp: string | null
    registeredIp: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    username: string | null
    cpf: string | null
    avatarUrl: string | null
    phone: string | null
    isActive: boolean | null
    role: $Enums.UserRole | null
    lastLogin: Date | null
    failedLogins: number | null
    emailVerified: Date | null
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    lastIp: string | null
    registeredIp: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    username: number
    cpf: number
    avatarUrl: number
    phone: number
    isActive: number
    role: number
    lastLogin: number
    failedLogins: number
    emailVerified: number
    verificationToken: number
    resetPasswordToken: number
    resetPasswordExpires: number
    lastIp: number
    registeredIp: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    failedLogins?: true
  }

  export type UsersSumAggregateInputType = {
    failedLogins?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    username?: true
    cpf?: true
    avatarUrl?: true
    phone?: true
    isActive?: true
    role?: true
    lastLogin?: true
    failedLogins?: true
    emailVerified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    lastIp?: true
    registeredIp?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    username?: true
    cpf?: true
    avatarUrl?: true
    phone?: true
    isActive?: true
    role?: true
    lastLogin?: true
    failedLogins?: true
    emailVerified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    lastIp?: true
    registeredIp?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    username?: true
    cpf?: true
    avatarUrl?: true
    phone?: true
    isActive?: true
    role?: true
    lastLogin?: true
    failedLogins?: true
    emailVerified?: true
    verificationToken?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    lastIp?: true
    registeredIp?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    username: string | null
    cpf: string
    avatarUrl: string | null
    phone: string | null
    isActive: boolean
    role: $Enums.UserRole
    lastLogin: Date | null
    failedLogins: number
    emailVerified: Date | null
    verificationToken: string | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    lastIp: string | null
    registeredIp: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    cpf?: boolean
    avatarUrl?: boolean
    phone?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    failedLogins?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    lastIp?: boolean
    registeredIp?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    cpf?: boolean
    avatarUrl?: boolean
    phone?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    failedLogins?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    lastIp?: boolean
    registeredIp?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    cpf?: boolean
    avatarUrl?: boolean
    phone?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    failedLogins?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    lastIp?: boolean
    registeredIp?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    cpf?: boolean
    avatarUrl?: boolean
    phone?: boolean
    isActive?: boolean
    role?: boolean
    lastLogin?: boolean
    failedLogins?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    lastIp?: boolean
    registeredIp?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "username" | "cpf" | "avatarUrl" | "phone" | "isActive" | "role" | "lastLogin" | "failedLogins" | "emailVerified" | "verificationToken" | "resetPasswordToken" | "resetPasswordExpires" | "lastIp" | "registeredIp" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      username: string | null
      cpf: string
      avatarUrl: string | null
      phone: string | null
      isActive: boolean
      role: $Enums.UserRole
      lastLogin: Date | null
      failedLogins: number
      emailVerified: Date | null
      verificationToken: string | null
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
      lastIp: string | null
      registeredIp: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly cpf: FieldRef<"Users", 'String'>
    readonly avatarUrl: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly isActive: FieldRef<"Users", 'Boolean'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly lastLogin: FieldRef<"Users", 'DateTime'>
    readonly failedLogins: FieldRef<"Users", 'Int'>
    readonly emailVerified: FieldRef<"Users", 'DateTime'>
    readonly verificationToken: FieldRef<"Users", 'String'>
    readonly resetPasswordToken: FieldRef<"Users", 'String'>
    readonly resetPasswordExpires: FieldRef<"Users", 'DateTime'>
    readonly lastIp: FieldRef<"Users", 'String'>
    readonly registeredIp: FieldRef<"Users", 'String'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Establishment
   */

  export type AggregateEstablishment = {
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  export type EstablishmentAvgAggregateOutputType = {
    id: number | null
    classificationId: number | null
  }

  export type EstablishmentSumAggregateOutputType = {
    id: number | null
    classificationId: number | null
  }

  export type EstablishmentMinAggregateOutputType = {
    id: number | null
    cnes: string | null
    cnpj: string | null
    tradeName: string | null
    corporateName: string | null
    address: string | null
    zipCode: string | null
    directorCpf: string | null
    classificationId: number | null
    mainActivityId: string | null
    secondaryActivityId: string | null
    susSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentMaxAggregateOutputType = {
    id: number | null
    cnes: string | null
    cnpj: string | null
    tradeName: string | null
    corporateName: string | null
    address: string | null
    zipCode: string | null
    directorCpf: string | null
    classificationId: number | null
    mainActivityId: string | null
    secondaryActivityId: string | null
    susSystem: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentCountAggregateOutputType = {
    id: number
    cnes: number
    cnpj: number
    tradeName: number
    corporateName: number
    address: number
    zipCode: number
    directorCpf: number
    classificationId: number
    mainActivityId: number
    secondaryActivityId: number
    susSystem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstablishmentAvgAggregateInputType = {
    id?: true
    classificationId?: true
  }

  export type EstablishmentSumAggregateInputType = {
    id?: true
    classificationId?: true
  }

  export type EstablishmentMinAggregateInputType = {
    id?: true
    cnes?: true
    cnpj?: true
    tradeName?: true
    corporateName?: true
    address?: true
    zipCode?: true
    directorCpf?: true
    classificationId?: true
    mainActivityId?: true
    secondaryActivityId?: true
    susSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentMaxAggregateInputType = {
    id?: true
    cnes?: true
    cnpj?: true
    tradeName?: true
    corporateName?: true
    address?: true
    zipCode?: true
    directorCpf?: true
    classificationId?: true
    mainActivityId?: true
    secondaryActivityId?: true
    susSystem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentCountAggregateInputType = {
    id?: true
    cnes?: true
    cnpj?: true
    tradeName?: true
    corporateName?: true
    address?: true
    zipCode?: true
    directorCpf?: true
    classificationId?: true
    mainActivityId?: true
    secondaryActivityId?: true
    susSystem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstablishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishment to aggregate.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Establishments
    **/
    _count?: true | EstablishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstablishmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstablishmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentMaxAggregateInputType
  }

  export type GetEstablishmentAggregateType<T extends EstablishmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishment[P]>
      : GetScalarType<T[P], AggregateEstablishment[P]>
  }




  export type EstablishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithAggregationInput | EstablishmentOrderByWithAggregationInput[]
    by: EstablishmentScalarFieldEnum[] | EstablishmentScalarFieldEnum
    having?: EstablishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentCountAggregateInputType | true
    _avg?: EstablishmentAvgAggregateInputType
    _sum?: EstablishmentSumAggregateInputType
    _min?: EstablishmentMinAggregateInputType
    _max?: EstablishmentMaxAggregateInputType
  }

  export type EstablishmentGroupByOutputType = {
    id: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    mainActivityId: string | null
    secondaryActivityId: string | null
    susSystem: boolean
    createdAt: Date
    updatedAt: Date
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  type GetEstablishmentGroupByPayload<T extends EstablishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnes?: boolean
    cnpj?: boolean
    tradeName?: boolean
    corporateName?: boolean
    address?: boolean
    zipCode?: boolean
    directorCpf?: boolean
    classificationId?: boolean
    mainActivityId?: boolean
    secondaryActivityId?: boolean
    susSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnes?: boolean
    cnpj?: boolean
    tradeName?: boolean
    corporateName?: boolean
    address?: boolean
    zipCode?: boolean
    directorCpf?: boolean
    classificationId?: boolean
    mainActivityId?: boolean
    secondaryActivityId?: boolean
    susSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnes?: boolean
    cnpj?: boolean
    tradeName?: boolean
    corporateName?: boolean
    address?: boolean
    zipCode?: boolean
    directorCpf?: boolean
    classificationId?: boolean
    mainActivityId?: boolean
    secondaryActivityId?: boolean
    susSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectScalar = {
    id?: boolean
    cnes?: boolean
    cnpj?: boolean
    tradeName?: boolean
    corporateName?: boolean
    address?: boolean
    zipCode?: boolean
    directorCpf?: boolean
    classificationId?: boolean
    mainActivityId?: boolean
    secondaryActivityId?: boolean
    susSystem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstablishmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnes" | "cnpj" | "tradeName" | "corporateName" | "address" | "zipCode" | "directorCpf" | "classificationId" | "mainActivityId" | "secondaryActivityId" | "susSystem" | "createdAt" | "updatedAt", ExtArgs["result"]["establishment"]>
  export type EstablishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }
  export type EstablishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }
  export type EstablishmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | EstablishmentClassificationDefaultArgs<ExtArgs>
    mainActivity?: boolean | Establishment$mainActivityArgs<ExtArgs>
    secondaryActivity?: boolean | Establishment$secondaryActivityArgs<ExtArgs>
  }

  export type $EstablishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Establishment"
    objects: {
      classification: Prisma.$EstablishmentClassificationPayload<ExtArgs>
      mainActivity: Prisma.$ActivityPayload<ExtArgs> | null
      secondaryActivity: Prisma.$ActivityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cnes: string
      cnpj: string
      tradeName: string
      corporateName: string
      address: string
      zipCode: string
      directorCpf: string
      classificationId: number
      mainActivityId: string | null
      secondaryActivityId: string | null
      susSystem: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["establishment"]>
    composites: {}
  }

  type EstablishmentGetPayload<S extends boolean | null | undefined | EstablishmentDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentPayload, S>

  type EstablishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstablishmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstablishmentCountAggregateInputType | true
    }

  export interface EstablishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Establishment'], meta: { name: 'Establishment' } }
    /**
     * Find zero or one Establishment that matches the filter.
     * @param {EstablishmentFindUniqueArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentFindUniqueArgs>(args: SelectSubset<T, EstablishmentFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Establishment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstablishmentFindUniqueOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentFindFirstArgs>(args?: SelectSubset<T, EstablishmentFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Establishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Establishments
     * const establishments = await prisma.establishment.findMany()
     * 
     * // Get first 10 Establishments
     * const establishments = await prisma.establishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentWithIdOnly = await prisma.establishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentFindManyArgs>(args?: SelectSubset<T, EstablishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Establishment.
     * @param {EstablishmentCreateArgs} args - Arguments to create a Establishment.
     * @example
     * // Create one Establishment
     * const Establishment = await prisma.establishment.create({
     *   data: {
     *     // ... data to create a Establishment
     *   }
     * })
     * 
     */
    create<T extends EstablishmentCreateArgs>(args: SelectSubset<T, EstablishmentCreateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Establishments.
     * @param {EstablishmentCreateManyArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentCreateManyArgs>(args?: SelectSubset<T, EstablishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Establishments and returns the data saved in the database.
     * @param {EstablishmentCreateManyAndReturnArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Establishment.
     * @param {EstablishmentDeleteArgs} args - Arguments to delete one Establishment.
     * @example
     * // Delete one Establishment
     * const Establishment = await prisma.establishment.delete({
     *   where: {
     *     // ... filter to delete one Establishment
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentDeleteArgs>(args: SelectSubset<T, EstablishmentDeleteArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Establishment.
     * @param {EstablishmentUpdateArgs} args - Arguments to update one Establishment.
     * @example
     * // Update one Establishment
     * const establishment = await prisma.establishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentUpdateArgs>(args: SelectSubset<T, EstablishmentUpdateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Establishments.
     * @param {EstablishmentDeleteManyArgs} args - Arguments to filter Establishments to delete.
     * @example
     * // Delete a few Establishments
     * const { count } = await prisma.establishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentDeleteManyArgs>(args?: SelectSubset<T, EstablishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentUpdateManyArgs>(args: SelectSubset<T, EstablishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments and returns the data updated in the database.
     * @param {EstablishmentUpdateManyAndReturnArgs} args - Arguments to update many Establishments.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstablishmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EstablishmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Establishment.
     * @param {EstablishmentUpsertArgs} args - Arguments to update or create a Establishment.
     * @example
     * // Update or create a Establishment
     * const establishment = await prisma.establishment.upsert({
     *   create: {
     *     // ... data to create a Establishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Establishment we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentUpsertArgs>(args: SelectSubset<T, EstablishmentUpsertArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentCountArgs} args - Arguments to filter Establishments to count.
     * @example
     * // Count the number of Establishments
     * const count = await prisma.establishment.count({
     *   where: {
     *     // ... the filter for the Establishments we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentCountArgs>(
      args?: Subset<T, EstablishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstablishmentAggregateArgs>(args: Subset<T, EstablishmentAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentAggregateType<T>>

    /**
     * Group by Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentGroupByArgs} args - Group by arguments.
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
      T extends EstablishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstablishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Establishment model
   */
  readonly fields: EstablishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Establishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classification<T extends EstablishmentClassificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentClassificationDefaultArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mainActivity<T extends Establishment$mainActivityArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$mainActivityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    secondaryActivity<T extends Establishment$secondaryActivityArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$secondaryActivityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Establishment model
   */
  interface EstablishmentFieldRefs {
    readonly id: FieldRef<"Establishment", 'Int'>
    readonly cnes: FieldRef<"Establishment", 'String'>
    readonly cnpj: FieldRef<"Establishment", 'String'>
    readonly tradeName: FieldRef<"Establishment", 'String'>
    readonly corporateName: FieldRef<"Establishment", 'String'>
    readonly address: FieldRef<"Establishment", 'String'>
    readonly zipCode: FieldRef<"Establishment", 'String'>
    readonly directorCpf: FieldRef<"Establishment", 'String'>
    readonly classificationId: FieldRef<"Establishment", 'Int'>
    readonly mainActivityId: FieldRef<"Establishment", 'String'>
    readonly secondaryActivityId: FieldRef<"Establishment", 'String'>
    readonly susSystem: FieldRef<"Establishment", 'Boolean'>
    readonly createdAt: FieldRef<"Establishment", 'DateTime'>
    readonly updatedAt: FieldRef<"Establishment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Establishment findUnique
   */
  export type EstablishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findUniqueOrThrow
   */
  export type EstablishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findFirst
   */
  export type EstablishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findFirstOrThrow
   */
  export type EstablishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findMany
   */
  export type EstablishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishments to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment create
   */
  export type EstablishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Establishment.
     */
    data: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
  }

  /**
   * Establishment createMany
   */
  export type EstablishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
  }

  /**
   * Establishment createManyAndReturn
   */
  export type EstablishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment update
   */
  export type EstablishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Establishment.
     */
    data: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
    /**
     * Choose, which Establishment to update.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment updateMany
   */
  export type EstablishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
  }

  /**
   * Establishment updateManyAndReturn
   */
  export type EstablishmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment upsert
   */
  export type EstablishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Establishment to update in case it exists.
     */
    where: EstablishmentWhereUniqueInput
    /**
     * In case the Establishment found by the `where` argument doesn't exist, create a new Establishment with this data.
     */
    create: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
    /**
     * In case the Establishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
  }

  /**
   * Establishment delete
   */
  export type EstablishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter which Establishment to delete.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment deleteMany
   */
  export type EstablishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishments to delete
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to delete.
     */
    limit?: number
  }

  /**
   * Establishment.mainActivity
   */
  export type Establishment$mainActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Establishment.secondaryActivity
   */
  export type Establishment$secondaryActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Establishment without action
   */
  export type EstablishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
  }


  /**
   * Model EstablishmentClassification
   */

  export type AggregateEstablishmentClassification = {
    _count: EstablishmentClassificationCountAggregateOutputType | null
    _avg: EstablishmentClassificationAvgAggregateOutputType | null
    _sum: EstablishmentClassificationSumAggregateOutputType | null
    _min: EstablishmentClassificationMinAggregateOutputType | null
    _max: EstablishmentClassificationMaxAggregateOutputType | null
  }

  export type EstablishmentClassificationAvgAggregateOutputType = {
    id: number | null
  }

  export type EstablishmentClassificationSumAggregateOutputType = {
    id: number | null
  }

  export type EstablishmentClassificationMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentClassificationMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EstablishmentClassificationCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EstablishmentClassificationAvgAggregateInputType = {
    id?: true
  }

  export type EstablishmentClassificationSumAggregateInputType = {
    id?: true
  }

  export type EstablishmentClassificationMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentClassificationMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EstablishmentClassificationCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EstablishmentClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstablishmentClassification to aggregate.
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstablishmentClassifications to fetch.
     */
    orderBy?: EstablishmentClassificationOrderByWithRelationInput | EstablishmentClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstablishmentClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstablishmentClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstablishmentClassifications
    **/
    _count?: true | EstablishmentClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstablishmentClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstablishmentClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentClassificationMaxAggregateInputType
  }

  export type GetEstablishmentClassificationAggregateType<T extends EstablishmentClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishmentClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishmentClassification[P]>
      : GetScalarType<T[P], AggregateEstablishmentClassification[P]>
  }




  export type EstablishmentClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentClassificationWhereInput
    orderBy?: EstablishmentClassificationOrderByWithAggregationInput | EstablishmentClassificationOrderByWithAggregationInput[]
    by: EstablishmentClassificationScalarFieldEnum[] | EstablishmentClassificationScalarFieldEnum
    having?: EstablishmentClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentClassificationCountAggregateInputType | true
    _avg?: EstablishmentClassificationAvgAggregateInputType
    _sum?: EstablishmentClassificationSumAggregateInputType
    _min?: EstablishmentClassificationMinAggregateInputType
    _max?: EstablishmentClassificationMaxAggregateInputType
  }

  export type EstablishmentClassificationGroupByOutputType = {
    id: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: EstablishmentClassificationCountAggregateOutputType | null
    _avg: EstablishmentClassificationAvgAggregateOutputType | null
    _sum: EstablishmentClassificationSumAggregateOutputType | null
    _min: EstablishmentClassificationMinAggregateOutputType | null
    _max: EstablishmentClassificationMaxAggregateOutputType | null
  }

  type GetEstablishmentClassificationGroupByPayload<T extends EstablishmentClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentClassificationGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    establishments?: boolean | EstablishmentClassification$establishmentsArgs<ExtArgs>
    _count?: boolean | EstablishmentClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishmentClassification"]>

  export type EstablishmentClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["establishmentClassification"]>

  export type EstablishmentClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["establishmentClassification"]>

  export type EstablishmentClassificationSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EstablishmentClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["establishmentClassification"]>
  export type EstablishmentClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishments?: boolean | EstablishmentClassification$establishmentsArgs<ExtArgs>
    _count?: boolean | EstablishmentClassificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstablishmentClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstablishmentClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstablishmentClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstablishmentClassification"
    objects: {
      establishments: Prisma.$EstablishmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["establishmentClassification"]>
    composites: {}
  }

  type EstablishmentClassificationGetPayload<S extends boolean | null | undefined | EstablishmentClassificationDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentClassificationPayload, S>

  type EstablishmentClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstablishmentClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstablishmentClassificationCountAggregateInputType | true
    }

  export interface EstablishmentClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstablishmentClassification'], meta: { name: 'EstablishmentClassification' } }
    /**
     * Find zero or one EstablishmentClassification that matches the filter.
     * @param {EstablishmentClassificationFindUniqueArgs} args - Arguments to find a EstablishmentClassification
     * @example
     * // Get one EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentClassificationFindUniqueArgs>(args: SelectSubset<T, EstablishmentClassificationFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstablishmentClassification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstablishmentClassificationFindUniqueOrThrowArgs} args - Arguments to find a EstablishmentClassification
     * @example
     * // Get one EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstablishmentClassification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationFindFirstArgs} args - Arguments to find a EstablishmentClassification
     * @example
     * // Get one EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentClassificationFindFirstArgs>(args?: SelectSubset<T, EstablishmentClassificationFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstablishmentClassification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationFindFirstOrThrowArgs} args - Arguments to find a EstablishmentClassification
     * @example
     * // Get one EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstablishmentClassifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstablishmentClassifications
     * const establishmentClassifications = await prisma.establishmentClassification.findMany()
     * 
     * // Get first 10 EstablishmentClassifications
     * const establishmentClassifications = await prisma.establishmentClassification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentClassificationWithIdOnly = await prisma.establishmentClassification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentClassificationFindManyArgs>(args?: SelectSubset<T, EstablishmentClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstablishmentClassification.
     * @param {EstablishmentClassificationCreateArgs} args - Arguments to create a EstablishmentClassification.
     * @example
     * // Create one EstablishmentClassification
     * const EstablishmentClassification = await prisma.establishmentClassification.create({
     *   data: {
     *     // ... data to create a EstablishmentClassification
     *   }
     * })
     * 
     */
    create<T extends EstablishmentClassificationCreateArgs>(args: SelectSubset<T, EstablishmentClassificationCreateArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstablishmentClassifications.
     * @param {EstablishmentClassificationCreateManyArgs} args - Arguments to create many EstablishmentClassifications.
     * @example
     * // Create many EstablishmentClassifications
     * const establishmentClassification = await prisma.establishmentClassification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentClassificationCreateManyArgs>(args?: SelectSubset<T, EstablishmentClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstablishmentClassifications and returns the data saved in the database.
     * @param {EstablishmentClassificationCreateManyAndReturnArgs} args - Arguments to create many EstablishmentClassifications.
     * @example
     * // Create many EstablishmentClassifications
     * const establishmentClassification = await prisma.establishmentClassification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstablishmentClassifications and only return the `id`
     * const establishmentClassificationWithIdOnly = await prisma.establishmentClassification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstablishmentClassification.
     * @param {EstablishmentClassificationDeleteArgs} args - Arguments to delete one EstablishmentClassification.
     * @example
     * // Delete one EstablishmentClassification
     * const EstablishmentClassification = await prisma.establishmentClassification.delete({
     *   where: {
     *     // ... filter to delete one EstablishmentClassification
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentClassificationDeleteArgs>(args: SelectSubset<T, EstablishmentClassificationDeleteArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstablishmentClassification.
     * @param {EstablishmentClassificationUpdateArgs} args - Arguments to update one EstablishmentClassification.
     * @example
     * // Update one EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentClassificationUpdateArgs>(args: SelectSubset<T, EstablishmentClassificationUpdateArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstablishmentClassifications.
     * @param {EstablishmentClassificationDeleteManyArgs} args - Arguments to filter EstablishmentClassifications to delete.
     * @example
     * // Delete a few EstablishmentClassifications
     * const { count } = await prisma.establishmentClassification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentClassificationDeleteManyArgs>(args?: SelectSubset<T, EstablishmentClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstablishmentClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstablishmentClassifications
     * const establishmentClassification = await prisma.establishmentClassification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentClassificationUpdateManyArgs>(args: SelectSubset<T, EstablishmentClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstablishmentClassifications and returns the data updated in the database.
     * @param {EstablishmentClassificationUpdateManyAndReturnArgs} args - Arguments to update many EstablishmentClassifications.
     * @example
     * // Update many EstablishmentClassifications
     * const establishmentClassification = await prisma.establishmentClassification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstablishmentClassifications and only return the `id`
     * const establishmentClassificationWithIdOnly = await prisma.establishmentClassification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstablishmentClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EstablishmentClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstablishmentClassification.
     * @param {EstablishmentClassificationUpsertArgs} args - Arguments to update or create a EstablishmentClassification.
     * @example
     * // Update or create a EstablishmentClassification
     * const establishmentClassification = await prisma.establishmentClassification.upsert({
     *   create: {
     *     // ... data to create a EstablishmentClassification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstablishmentClassification we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentClassificationUpsertArgs>(args: SelectSubset<T, EstablishmentClassificationUpsertArgs<ExtArgs>>): Prisma__EstablishmentClassificationClient<$Result.GetResult<Prisma.$EstablishmentClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstablishmentClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationCountArgs} args - Arguments to filter EstablishmentClassifications to count.
     * @example
     * // Count the number of EstablishmentClassifications
     * const count = await prisma.establishmentClassification.count({
     *   where: {
     *     // ... the filter for the EstablishmentClassifications we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentClassificationCountArgs>(
      args?: Subset<T, EstablishmentClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstablishmentClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstablishmentClassificationAggregateArgs>(args: Subset<T, EstablishmentClassificationAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentClassificationAggregateType<T>>

    /**
     * Group by EstablishmentClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentClassificationGroupByArgs} args - Group by arguments.
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
      T extends EstablishmentClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentClassificationGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentClassificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstablishmentClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstablishmentClassification model
   */
  readonly fields: EstablishmentClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstablishmentClassification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishments<T extends EstablishmentClassification$establishmentsArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentClassification$establishmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EstablishmentClassification model
   */
  interface EstablishmentClassificationFieldRefs {
    readonly id: FieldRef<"EstablishmentClassification", 'Int'>
    readonly description: FieldRef<"EstablishmentClassification", 'String'>
    readonly createdAt: FieldRef<"EstablishmentClassification", 'DateTime'>
    readonly updatedAt: FieldRef<"EstablishmentClassification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EstablishmentClassification findUnique
   */
  export type EstablishmentClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter, which EstablishmentClassification to fetch.
     */
    where: EstablishmentClassificationWhereUniqueInput
  }

  /**
   * EstablishmentClassification findUniqueOrThrow
   */
  export type EstablishmentClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter, which EstablishmentClassification to fetch.
     */
    where: EstablishmentClassificationWhereUniqueInput
  }

  /**
   * EstablishmentClassification findFirst
   */
  export type EstablishmentClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter, which EstablishmentClassification to fetch.
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstablishmentClassifications to fetch.
     */
    orderBy?: EstablishmentClassificationOrderByWithRelationInput | EstablishmentClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstablishmentClassifications.
     */
    cursor?: EstablishmentClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstablishmentClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstablishmentClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstablishmentClassifications.
     */
    distinct?: EstablishmentClassificationScalarFieldEnum | EstablishmentClassificationScalarFieldEnum[]
  }

  /**
   * EstablishmentClassification findFirstOrThrow
   */
  export type EstablishmentClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter, which EstablishmentClassification to fetch.
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstablishmentClassifications to fetch.
     */
    orderBy?: EstablishmentClassificationOrderByWithRelationInput | EstablishmentClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstablishmentClassifications.
     */
    cursor?: EstablishmentClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstablishmentClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstablishmentClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstablishmentClassifications.
     */
    distinct?: EstablishmentClassificationScalarFieldEnum | EstablishmentClassificationScalarFieldEnum[]
  }

  /**
   * EstablishmentClassification findMany
   */
  export type EstablishmentClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter, which EstablishmentClassifications to fetch.
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstablishmentClassifications to fetch.
     */
    orderBy?: EstablishmentClassificationOrderByWithRelationInput | EstablishmentClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstablishmentClassifications.
     */
    cursor?: EstablishmentClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstablishmentClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstablishmentClassifications.
     */
    skip?: number
    distinct?: EstablishmentClassificationScalarFieldEnum | EstablishmentClassificationScalarFieldEnum[]
  }

  /**
   * EstablishmentClassification create
   */
  export type EstablishmentClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EstablishmentClassification.
     */
    data: XOR<EstablishmentClassificationCreateInput, EstablishmentClassificationUncheckedCreateInput>
  }

  /**
   * EstablishmentClassification createMany
   */
  export type EstablishmentClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstablishmentClassifications.
     */
    data: EstablishmentClassificationCreateManyInput | EstablishmentClassificationCreateManyInput[]
  }

  /**
   * EstablishmentClassification createManyAndReturn
   */
  export type EstablishmentClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many EstablishmentClassifications.
     */
    data: EstablishmentClassificationCreateManyInput | EstablishmentClassificationCreateManyInput[]
  }

  /**
   * EstablishmentClassification update
   */
  export type EstablishmentClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EstablishmentClassification.
     */
    data: XOR<EstablishmentClassificationUpdateInput, EstablishmentClassificationUncheckedUpdateInput>
    /**
     * Choose, which EstablishmentClassification to update.
     */
    where: EstablishmentClassificationWhereUniqueInput
  }

  /**
   * EstablishmentClassification updateMany
   */
  export type EstablishmentClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstablishmentClassifications.
     */
    data: XOR<EstablishmentClassificationUpdateManyMutationInput, EstablishmentClassificationUncheckedUpdateManyInput>
    /**
     * Filter which EstablishmentClassifications to update
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * Limit how many EstablishmentClassifications to update.
     */
    limit?: number
  }

  /**
   * EstablishmentClassification updateManyAndReturn
   */
  export type EstablishmentClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * The data used to update EstablishmentClassifications.
     */
    data: XOR<EstablishmentClassificationUpdateManyMutationInput, EstablishmentClassificationUncheckedUpdateManyInput>
    /**
     * Filter which EstablishmentClassifications to update
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * Limit how many EstablishmentClassifications to update.
     */
    limit?: number
  }

  /**
   * EstablishmentClassification upsert
   */
  export type EstablishmentClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EstablishmentClassification to update in case it exists.
     */
    where: EstablishmentClassificationWhereUniqueInput
    /**
     * In case the EstablishmentClassification found by the `where` argument doesn't exist, create a new EstablishmentClassification with this data.
     */
    create: XOR<EstablishmentClassificationCreateInput, EstablishmentClassificationUncheckedCreateInput>
    /**
     * In case the EstablishmentClassification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentClassificationUpdateInput, EstablishmentClassificationUncheckedUpdateInput>
  }

  /**
   * EstablishmentClassification delete
   */
  export type EstablishmentClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
    /**
     * Filter which EstablishmentClassification to delete.
     */
    where: EstablishmentClassificationWhereUniqueInput
  }

  /**
   * EstablishmentClassification deleteMany
   */
  export type EstablishmentClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstablishmentClassifications to delete
     */
    where?: EstablishmentClassificationWhereInput
    /**
     * Limit how many EstablishmentClassifications to delete.
     */
    limit?: number
  }

  /**
   * EstablishmentClassification.establishments
   */
  export type EstablishmentClassification$establishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    cursor?: EstablishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * EstablishmentClassification without action
   */
  export type EstablishmentClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentClassification
     */
    select?: EstablishmentClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstablishmentClassification
     */
    omit?: EstablishmentClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentClassificationInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    activity: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    activity: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    activity: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    activity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    activity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    activity?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    activity: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mainEstablishments?: boolean | Activity$mainEstablishmentsArgs<ExtArgs>
    secondaryEstablishments?: boolean | Activity$secondaryEstablishmentsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    activity?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainEstablishments?: boolean | Activity$mainEstablishmentsArgs<ExtArgs>
    secondaryEstablishments?: boolean | Activity$secondaryEstablishmentsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      mainEstablishments: Prisma.$EstablishmentPayload<ExtArgs>[]
      secondaryEstablishments: Prisma.$EstablishmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activity: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainEstablishments<T extends Activity$mainEstablishmentsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$mainEstablishmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secondaryEstablishments<T extends Activity$secondaryEstablishmentsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$secondaryEstablishmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly activity: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.mainEstablishments
   */
  export type Activity$mainEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    cursor?: EstablishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Activity.secondaryEstablishments
   */
  export type Activity$secondaryEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    cursor?: EstablishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    username: 'username',
    cpf: 'cpf',
    avatarUrl: 'avatarUrl',
    phone: 'phone',
    isActive: 'isActive',
    role: 'role',
    lastLogin: 'lastLogin',
    failedLogins: 'failedLogins',
    emailVerified: 'emailVerified',
    verificationToken: 'verificationToken',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    lastIp: 'lastIp',
    registeredIp: 'registeredIp',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EstablishmentScalarFieldEnum: {
    id: 'id',
    cnes: 'cnes',
    cnpj: 'cnpj',
    tradeName: 'tradeName',
    corporateName: 'corporateName',
    address: 'address',
    zipCode: 'zipCode',
    directorCpf: 'directorCpf',
    classificationId: 'classificationId',
    mainActivityId: 'mainActivityId',
    secondaryActivityId: 'secondaryActivityId',
    susSystem: 'susSystem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstablishmentScalarFieldEnum = (typeof EstablishmentScalarFieldEnum)[keyof typeof EstablishmentScalarFieldEnum]


  export const EstablishmentClassificationScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EstablishmentClassificationScalarFieldEnum = (typeof EstablishmentClassificationScalarFieldEnum)[keyof typeof EstablishmentClassificationScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    activity: 'activity',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    username?: StringNullableFilter<"Users"> | string | null
    cpf?: StringFilter<"Users"> | string
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    isActive?: BoolFilter<"Users"> | boolean
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    lastLogin?: DateTimeNullableFilter<"Users"> | Date | string | null
    failedLogins?: IntFilter<"Users"> | number
    emailVerified?: DateTimeNullableFilter<"Users"> | Date | string | null
    verificationToken?: StringNullableFilter<"Users"> | string | null
    resetPasswordToken?: StringNullableFilter<"Users"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"Users"> | Date | string | null
    lastIp?: StringNullableFilter<"Users"> | string | null
    registeredIp?: StringNullableFilter<"Users"> | string | null
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    cpf?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    failedLogins?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    lastIp?: SortOrderInput | SortOrder
    registeredIp?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    cpf?: string
    verificationToken?: string
    resetPasswordToken?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    avatarUrl?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    isActive?: BoolFilter<"Users"> | boolean
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    lastLogin?: DateTimeNullableFilter<"Users"> | Date | string | null
    failedLogins?: IntFilter<"Users"> | number
    emailVerified?: DateTimeNullableFilter<"Users"> | Date | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"Users"> | Date | string | null
    lastIp?: StringNullableFilter<"Users"> | string | null
    registeredIp?: StringNullableFilter<"Users"> | string | null
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
  }, "id" | "email" | "username" | "cpf" | "verificationToken" | "resetPasswordToken">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    cpf?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    failedLogins?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    lastIp?: SortOrderInput | SortOrder
    registeredIp?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    username?: StringNullableWithAggregatesFilter<"Users"> | string | null
    cpf?: StringWithAggregatesFilter<"Users"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    isActive?: BoolWithAggregatesFilter<"Users"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    failedLogins?: IntWithAggregatesFilter<"Users"> | number
    emailVerified?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"Users"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"Users"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    lastIp?: StringNullableWithAggregatesFilter<"Users"> | string | null
    registeredIp?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type EstablishmentWhereInput = {
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    id?: IntFilter<"Establishment"> | number
    cnes?: StringFilter<"Establishment"> | string
    cnpj?: StringFilter<"Establishment"> | string
    tradeName?: StringFilter<"Establishment"> | string
    corporateName?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    directorCpf?: StringFilter<"Establishment"> | string
    classificationId?: IntFilter<"Establishment"> | number
    mainActivityId?: StringNullableFilter<"Establishment"> | string | null
    secondaryActivityId?: StringNullableFilter<"Establishment"> | string | null
    susSystem?: BoolFilter<"Establishment"> | boolean
    createdAt?: DateTimeFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeFilter<"Establishment"> | Date | string
    classification?: XOR<EstablishmentClassificationScalarRelationFilter, EstablishmentClassificationWhereInput>
    mainActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    secondaryActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
  }

  export type EstablishmentOrderByWithRelationInput = {
    id?: SortOrder
    cnes?: SortOrder
    cnpj?: SortOrder
    tradeName?: SortOrder
    corporateName?: SortOrder
    address?: SortOrder
    zipCode?: SortOrder
    directorCpf?: SortOrder
    classificationId?: SortOrder
    mainActivityId?: SortOrderInput | SortOrder
    secondaryActivityId?: SortOrderInput | SortOrder
    susSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classification?: EstablishmentClassificationOrderByWithRelationInput
    mainActivity?: ActivityOrderByWithRelationInput
    secondaryActivity?: ActivityOrderByWithRelationInput
  }

  export type EstablishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    cnes?: StringFilter<"Establishment"> | string
    cnpj?: StringFilter<"Establishment"> | string
    tradeName?: StringFilter<"Establishment"> | string
    corporateName?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    directorCpf?: StringFilter<"Establishment"> | string
    classificationId?: IntFilter<"Establishment"> | number
    mainActivityId?: StringNullableFilter<"Establishment"> | string | null
    secondaryActivityId?: StringNullableFilter<"Establishment"> | string | null
    susSystem?: BoolFilter<"Establishment"> | boolean
    createdAt?: DateTimeFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeFilter<"Establishment"> | Date | string
    classification?: XOR<EstablishmentClassificationScalarRelationFilter, EstablishmentClassificationWhereInput>
    mainActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
    secondaryActivity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
  }, "id">

  export type EstablishmentOrderByWithAggregationInput = {
    id?: SortOrder
    cnes?: SortOrder
    cnpj?: SortOrder
    tradeName?: SortOrder
    corporateName?: SortOrder
    address?: SortOrder
    zipCode?: SortOrder
    directorCpf?: SortOrder
    classificationId?: SortOrder
    mainActivityId?: SortOrderInput | SortOrder
    secondaryActivityId?: SortOrderInput | SortOrder
    susSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstablishmentCountOrderByAggregateInput
    _avg?: EstablishmentAvgOrderByAggregateInput
    _max?: EstablishmentMaxOrderByAggregateInput
    _min?: EstablishmentMinOrderByAggregateInput
    _sum?: EstablishmentSumOrderByAggregateInput
  }

  export type EstablishmentScalarWhereWithAggregatesInput = {
    AND?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    OR?: EstablishmentScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Establishment"> | number
    cnes?: StringWithAggregatesFilter<"Establishment"> | string
    cnpj?: StringWithAggregatesFilter<"Establishment"> | string
    tradeName?: StringWithAggregatesFilter<"Establishment"> | string
    corporateName?: StringWithAggregatesFilter<"Establishment"> | string
    address?: StringWithAggregatesFilter<"Establishment"> | string
    zipCode?: StringWithAggregatesFilter<"Establishment"> | string
    directorCpf?: StringWithAggregatesFilter<"Establishment"> | string
    classificationId?: IntWithAggregatesFilter<"Establishment"> | number
    mainActivityId?: StringNullableWithAggregatesFilter<"Establishment"> | string | null
    secondaryActivityId?: StringNullableWithAggregatesFilter<"Establishment"> | string | null
    susSystem?: BoolWithAggregatesFilter<"Establishment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
  }

  export type EstablishmentClassificationWhereInput = {
    AND?: EstablishmentClassificationWhereInput | EstablishmentClassificationWhereInput[]
    OR?: EstablishmentClassificationWhereInput[]
    NOT?: EstablishmentClassificationWhereInput | EstablishmentClassificationWhereInput[]
    id?: IntFilter<"EstablishmentClassification"> | number
    description?: StringFilter<"EstablishmentClassification"> | string
    createdAt?: DateTimeFilter<"EstablishmentClassification"> | Date | string
    updatedAt?: DateTimeFilter<"EstablishmentClassification"> | Date | string
    establishments?: EstablishmentListRelationFilter
  }

  export type EstablishmentClassificationOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    establishments?: EstablishmentOrderByRelationAggregateInput
  }

  export type EstablishmentClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstablishmentClassificationWhereInput | EstablishmentClassificationWhereInput[]
    OR?: EstablishmentClassificationWhereInput[]
    NOT?: EstablishmentClassificationWhereInput | EstablishmentClassificationWhereInput[]
    description?: StringFilter<"EstablishmentClassification"> | string
    createdAt?: DateTimeFilter<"EstablishmentClassification"> | Date | string
    updatedAt?: DateTimeFilter<"EstablishmentClassification"> | Date | string
    establishments?: EstablishmentListRelationFilter
  }, "id">

  export type EstablishmentClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EstablishmentClassificationCountOrderByAggregateInput
    _avg?: EstablishmentClassificationAvgOrderByAggregateInput
    _max?: EstablishmentClassificationMaxOrderByAggregateInput
    _min?: EstablishmentClassificationMinOrderByAggregateInput
    _sum?: EstablishmentClassificationSumOrderByAggregateInput
  }

  export type EstablishmentClassificationScalarWhereWithAggregatesInput = {
    AND?: EstablishmentClassificationScalarWhereWithAggregatesInput | EstablishmentClassificationScalarWhereWithAggregatesInput[]
    OR?: EstablishmentClassificationScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentClassificationScalarWhereWithAggregatesInput | EstablishmentClassificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstablishmentClassification"> | number
    description?: StringWithAggregatesFilter<"EstablishmentClassification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EstablishmentClassification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EstablishmentClassification"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    activity?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    mainEstablishments?: EstablishmentListRelationFilter
    secondaryEstablishments?: EstablishmentListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    activity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mainEstablishments?: EstablishmentOrderByRelationAggregateInput
    secondaryEstablishments?: EstablishmentOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    activity?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    mainEstablishments?: EstablishmentListRelationFilter
    secondaryEstablishments?: EstablishmentListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    activity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    activity?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    username?: string | null
    cpf: string
    avatarUrl?: string | null
    phone?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    failedLogins?: number
    emailVerified?: Date | string | null
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    lastIp?: string | null
    registeredIp?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    username?: string | null
    cpf: string
    avatarUrl?: string | null
    phone?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    failedLogins?: number
    emailVerified?: Date | string | null
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    lastIp?: string | null
    registeredIp?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLogins?: IntFieldUpdateOperationsInput | number
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredIp?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLogins?: IntFieldUpdateOperationsInput | number
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredIp?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    username?: string | null
    cpf: string
    avatarUrl?: string | null
    phone?: string | null
    isActive?: boolean
    role?: $Enums.UserRole
    lastLogin?: Date | string | null
    failedLogins?: number
    emailVerified?: Date | string | null
    verificationToken?: string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    lastIp?: string | null
    registeredIp?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLogins?: IntFieldUpdateOperationsInput | number
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredIp?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedLogins?: IntFieldUpdateOperationsInput | number
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredIp?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentCreateInput = {
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: EstablishmentClassificationCreateNestedOneWithoutEstablishmentsInput
    mainActivity?: ActivityCreateNestedOneWithoutMainEstablishmentsInput
    secondaryActivity?: ActivityCreateNestedOneWithoutSecondaryEstablishmentsInput
  }

  export type EstablishmentUncheckedCreateInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    mainActivityId?: string | null
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUpdateInput = {
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: EstablishmentClassificationUpdateOneRequiredWithoutEstablishmentsNestedInput
    mainActivity?: ActivityUpdateOneWithoutMainEstablishmentsNestedInput
    secondaryActivity?: ActivityUpdateOneWithoutSecondaryEstablishmentsNestedInput
  }

  export type EstablishmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentCreateManyInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    mainActivityId?: string | null
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUpdateManyMutationInput = {
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentClassificationCreateInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    establishments?: EstablishmentCreateNestedManyWithoutClassificationInput
  }

  export type EstablishmentClassificationUncheckedCreateInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    establishments?: EstablishmentUncheckedCreateNestedManyWithoutClassificationInput
  }

  export type EstablishmentClassificationUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    establishments?: EstablishmentUpdateManyWithoutClassificationNestedInput
  }

  export type EstablishmentClassificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    establishments?: EstablishmentUncheckedUpdateManyWithoutClassificationNestedInput
  }

  export type EstablishmentClassificationCreateManyInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentClassificationUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentClassificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainEstablishments?: EstablishmentCreateNestedManyWithoutMainActivityInput
    secondaryEstablishments?: EstablishmentCreateNestedManyWithoutSecondaryActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainEstablishments?: EstablishmentUncheckedCreateNestedManyWithoutMainActivityInput
    secondaryEstablishments?: EstablishmentUncheckedCreateNestedManyWithoutSecondaryActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainEstablishments?: EstablishmentUpdateManyWithoutMainActivityNestedInput
    secondaryEstablishments?: EstablishmentUpdateManyWithoutSecondaryActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainEstablishments?: EstablishmentUncheckedUpdateManyWithoutMainActivityNestedInput
    secondaryEstablishments?: EstablishmentUncheckedUpdateManyWithoutSecondaryActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    cpf?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    failedLogins?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    lastIp?: SortOrder
    registeredIp?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    failedLogins?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    cpf?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    failedLogins?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    lastIp?: SortOrder
    registeredIp?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    cpf?: SortOrder
    avatarUrl?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    failedLogins?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    lastIp?: SortOrder
    registeredIp?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    failedLogins?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EstablishmentClassificationScalarRelationFilter = {
    is?: EstablishmentClassificationWhereInput
    isNot?: EstablishmentClassificationWhereInput
  }

  export type ActivityNullableScalarRelationFilter = {
    is?: ActivityWhereInput | null
    isNot?: ActivityWhereInput | null
  }

  export type EstablishmentCountOrderByAggregateInput = {
    id?: SortOrder
    cnes?: SortOrder
    cnpj?: SortOrder
    tradeName?: SortOrder
    corporateName?: SortOrder
    address?: SortOrder
    zipCode?: SortOrder
    directorCpf?: SortOrder
    classificationId?: SortOrder
    mainActivityId?: SortOrder
    secondaryActivityId?: SortOrder
    susSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentAvgOrderByAggregateInput = {
    id?: SortOrder
    classificationId?: SortOrder
  }

  export type EstablishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    cnes?: SortOrder
    cnpj?: SortOrder
    tradeName?: SortOrder
    corporateName?: SortOrder
    address?: SortOrder
    zipCode?: SortOrder
    directorCpf?: SortOrder
    classificationId?: SortOrder
    mainActivityId?: SortOrder
    secondaryActivityId?: SortOrder
    susSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentMinOrderByAggregateInput = {
    id?: SortOrder
    cnes?: SortOrder
    cnpj?: SortOrder
    tradeName?: SortOrder
    corporateName?: SortOrder
    address?: SortOrder
    zipCode?: SortOrder
    directorCpf?: SortOrder
    classificationId?: SortOrder
    mainActivityId?: SortOrder
    secondaryActivityId?: SortOrder
    susSystem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentSumOrderByAggregateInput = {
    id?: SortOrder
    classificationId?: SortOrder
  }

  export type EstablishmentListRelationFilter = {
    every?: EstablishmentWhereInput
    some?: EstablishmentWhereInput
    none?: EstablishmentWhereInput
  }

  export type EstablishmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstablishmentClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentClassificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstablishmentClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EstablishmentClassificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    activity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    activity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    activity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EstablishmentClassificationCreateNestedOneWithoutEstablishmentsInput = {
    create?: XOR<EstablishmentClassificationCreateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedCreateWithoutEstablishmentsInput>
    connectOrCreate?: EstablishmentClassificationCreateOrConnectWithoutEstablishmentsInput
    connect?: EstablishmentClassificationWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutMainEstablishmentsInput = {
    create?: XOR<ActivityCreateWithoutMainEstablishmentsInput, ActivityUncheckedCreateWithoutMainEstablishmentsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutMainEstablishmentsInput
    connect?: ActivityWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutSecondaryEstablishmentsInput = {
    create?: XOR<ActivityCreateWithoutSecondaryEstablishmentsInput, ActivityUncheckedCreateWithoutSecondaryEstablishmentsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutSecondaryEstablishmentsInput
    connect?: ActivityWhereUniqueInput
  }

  export type EstablishmentClassificationUpdateOneRequiredWithoutEstablishmentsNestedInput = {
    create?: XOR<EstablishmentClassificationCreateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedCreateWithoutEstablishmentsInput>
    connectOrCreate?: EstablishmentClassificationCreateOrConnectWithoutEstablishmentsInput
    upsert?: EstablishmentClassificationUpsertWithoutEstablishmentsInput
    connect?: EstablishmentClassificationWhereUniqueInput
    update?: XOR<XOR<EstablishmentClassificationUpdateToOneWithWhereWithoutEstablishmentsInput, EstablishmentClassificationUpdateWithoutEstablishmentsInput>, EstablishmentClassificationUncheckedUpdateWithoutEstablishmentsInput>
  }

  export type ActivityUpdateOneWithoutMainEstablishmentsNestedInput = {
    create?: XOR<ActivityCreateWithoutMainEstablishmentsInput, ActivityUncheckedCreateWithoutMainEstablishmentsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutMainEstablishmentsInput
    upsert?: ActivityUpsertWithoutMainEstablishmentsInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutMainEstablishmentsInput, ActivityUpdateWithoutMainEstablishmentsInput>, ActivityUncheckedUpdateWithoutMainEstablishmentsInput>
  }

  export type ActivityUpdateOneWithoutSecondaryEstablishmentsNestedInput = {
    create?: XOR<ActivityCreateWithoutSecondaryEstablishmentsInput, ActivityUncheckedCreateWithoutSecondaryEstablishmentsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutSecondaryEstablishmentsInput
    upsert?: ActivityUpsertWithoutSecondaryEstablishmentsInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutSecondaryEstablishmentsInput, ActivityUpdateWithoutSecondaryEstablishmentsInput>, ActivityUncheckedUpdateWithoutSecondaryEstablishmentsInput>
  }

  export type EstablishmentCreateNestedManyWithoutClassificationInput = {
    create?: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput> | EstablishmentCreateWithoutClassificationInput[] | EstablishmentUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutClassificationInput | EstablishmentCreateOrConnectWithoutClassificationInput[]
    createMany?: EstablishmentCreateManyClassificationInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUncheckedCreateNestedManyWithoutClassificationInput = {
    create?: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput> | EstablishmentCreateWithoutClassificationInput[] | EstablishmentUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutClassificationInput | EstablishmentCreateOrConnectWithoutClassificationInput[]
    createMany?: EstablishmentCreateManyClassificationInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput> | EstablishmentCreateWithoutClassificationInput[] | EstablishmentUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutClassificationInput | EstablishmentCreateOrConnectWithoutClassificationInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutClassificationInput | EstablishmentUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: EstablishmentCreateManyClassificationInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutClassificationInput | EstablishmentUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutClassificationInput | EstablishmentUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentUncheckedUpdateManyWithoutClassificationNestedInput = {
    create?: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput> | EstablishmentCreateWithoutClassificationInput[] | EstablishmentUncheckedCreateWithoutClassificationInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutClassificationInput | EstablishmentCreateOrConnectWithoutClassificationInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutClassificationInput | EstablishmentUpsertWithWhereUniqueWithoutClassificationInput[]
    createMany?: EstablishmentCreateManyClassificationInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutClassificationInput | EstablishmentUpdateWithWhereUniqueWithoutClassificationInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutClassificationInput | EstablishmentUpdateManyWithWhereWithoutClassificationInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentCreateNestedManyWithoutMainActivityInput = {
    create?: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput> | EstablishmentCreateWithoutMainActivityInput[] | EstablishmentUncheckedCreateWithoutMainActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutMainActivityInput | EstablishmentCreateOrConnectWithoutMainActivityInput[]
    createMany?: EstablishmentCreateManyMainActivityInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentCreateNestedManyWithoutSecondaryActivityInput = {
    create?: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput> | EstablishmentCreateWithoutSecondaryActivityInput[] | EstablishmentUncheckedCreateWithoutSecondaryActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSecondaryActivityInput | EstablishmentCreateOrConnectWithoutSecondaryActivityInput[]
    createMany?: EstablishmentCreateManySecondaryActivityInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUncheckedCreateNestedManyWithoutMainActivityInput = {
    create?: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput> | EstablishmentCreateWithoutMainActivityInput[] | EstablishmentUncheckedCreateWithoutMainActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutMainActivityInput | EstablishmentCreateOrConnectWithoutMainActivityInput[]
    createMany?: EstablishmentCreateManyMainActivityInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUncheckedCreateNestedManyWithoutSecondaryActivityInput = {
    create?: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput> | EstablishmentCreateWithoutSecondaryActivityInput[] | EstablishmentUncheckedCreateWithoutSecondaryActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSecondaryActivityInput | EstablishmentCreateOrConnectWithoutSecondaryActivityInput[]
    createMany?: EstablishmentCreateManySecondaryActivityInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUpdateManyWithoutMainActivityNestedInput = {
    create?: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput> | EstablishmentCreateWithoutMainActivityInput[] | EstablishmentUncheckedCreateWithoutMainActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutMainActivityInput | EstablishmentCreateOrConnectWithoutMainActivityInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutMainActivityInput | EstablishmentUpsertWithWhereUniqueWithoutMainActivityInput[]
    createMany?: EstablishmentCreateManyMainActivityInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutMainActivityInput | EstablishmentUpdateWithWhereUniqueWithoutMainActivityInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutMainActivityInput | EstablishmentUpdateManyWithWhereWithoutMainActivityInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentUpdateManyWithoutSecondaryActivityNestedInput = {
    create?: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput> | EstablishmentCreateWithoutSecondaryActivityInput[] | EstablishmentUncheckedCreateWithoutSecondaryActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSecondaryActivityInput | EstablishmentCreateOrConnectWithoutSecondaryActivityInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutSecondaryActivityInput | EstablishmentUpsertWithWhereUniqueWithoutSecondaryActivityInput[]
    createMany?: EstablishmentCreateManySecondaryActivityInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutSecondaryActivityInput | EstablishmentUpdateWithWhereUniqueWithoutSecondaryActivityInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutSecondaryActivityInput | EstablishmentUpdateManyWithWhereWithoutSecondaryActivityInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentUncheckedUpdateManyWithoutMainActivityNestedInput = {
    create?: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput> | EstablishmentCreateWithoutMainActivityInput[] | EstablishmentUncheckedCreateWithoutMainActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutMainActivityInput | EstablishmentCreateOrConnectWithoutMainActivityInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutMainActivityInput | EstablishmentUpsertWithWhereUniqueWithoutMainActivityInput[]
    createMany?: EstablishmentCreateManyMainActivityInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutMainActivityInput | EstablishmentUpdateWithWhereUniqueWithoutMainActivityInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutMainActivityInput | EstablishmentUpdateManyWithWhereWithoutMainActivityInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentUncheckedUpdateManyWithoutSecondaryActivityNestedInput = {
    create?: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput> | EstablishmentCreateWithoutSecondaryActivityInput[] | EstablishmentUncheckedCreateWithoutSecondaryActivityInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSecondaryActivityInput | EstablishmentCreateOrConnectWithoutSecondaryActivityInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutSecondaryActivityInput | EstablishmentUpsertWithWhereUniqueWithoutSecondaryActivityInput[]
    createMany?: EstablishmentCreateManySecondaryActivityInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutSecondaryActivityInput | EstablishmentUpdateWithWhereUniqueWithoutSecondaryActivityInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutSecondaryActivityInput | EstablishmentUpdateManyWithWhereWithoutSecondaryActivityInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EstablishmentClassificationCreateWithoutEstablishmentsInput = {
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentClassificationUncheckedCreateWithoutEstablishmentsInput = {
    id?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentClassificationCreateOrConnectWithoutEstablishmentsInput = {
    where: EstablishmentClassificationWhereUniqueInput
    create: XOR<EstablishmentClassificationCreateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedCreateWithoutEstablishmentsInput>
  }

  export type ActivityCreateWithoutMainEstablishmentsInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    secondaryEstablishments?: EstablishmentCreateNestedManyWithoutSecondaryActivityInput
  }

  export type ActivityUncheckedCreateWithoutMainEstablishmentsInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    secondaryEstablishments?: EstablishmentUncheckedCreateNestedManyWithoutSecondaryActivityInput
  }

  export type ActivityCreateOrConnectWithoutMainEstablishmentsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutMainEstablishmentsInput, ActivityUncheckedCreateWithoutMainEstablishmentsInput>
  }

  export type ActivityCreateWithoutSecondaryEstablishmentsInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainEstablishments?: EstablishmentCreateNestedManyWithoutMainActivityInput
  }

  export type ActivityUncheckedCreateWithoutSecondaryEstablishmentsInput = {
    id: string
    activity: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mainEstablishments?: EstablishmentUncheckedCreateNestedManyWithoutMainActivityInput
  }

  export type ActivityCreateOrConnectWithoutSecondaryEstablishmentsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutSecondaryEstablishmentsInput, ActivityUncheckedCreateWithoutSecondaryEstablishmentsInput>
  }

  export type EstablishmentClassificationUpsertWithoutEstablishmentsInput = {
    update: XOR<EstablishmentClassificationUpdateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedUpdateWithoutEstablishmentsInput>
    create: XOR<EstablishmentClassificationCreateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedCreateWithoutEstablishmentsInput>
    where?: EstablishmentClassificationWhereInput
  }

  export type EstablishmentClassificationUpdateToOneWithWhereWithoutEstablishmentsInput = {
    where?: EstablishmentClassificationWhereInput
    data: XOR<EstablishmentClassificationUpdateWithoutEstablishmentsInput, EstablishmentClassificationUncheckedUpdateWithoutEstablishmentsInput>
  }

  export type EstablishmentClassificationUpdateWithoutEstablishmentsInput = {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentClassificationUncheckedUpdateWithoutEstablishmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpsertWithoutMainEstablishmentsInput = {
    update: XOR<ActivityUpdateWithoutMainEstablishmentsInput, ActivityUncheckedUpdateWithoutMainEstablishmentsInput>
    create: XOR<ActivityCreateWithoutMainEstablishmentsInput, ActivityUncheckedCreateWithoutMainEstablishmentsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutMainEstablishmentsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutMainEstablishmentsInput, ActivityUncheckedUpdateWithoutMainEstablishmentsInput>
  }

  export type ActivityUpdateWithoutMainEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secondaryEstablishments?: EstablishmentUpdateManyWithoutSecondaryActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutMainEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secondaryEstablishments?: EstablishmentUncheckedUpdateManyWithoutSecondaryActivityNestedInput
  }

  export type ActivityUpsertWithoutSecondaryEstablishmentsInput = {
    update: XOR<ActivityUpdateWithoutSecondaryEstablishmentsInput, ActivityUncheckedUpdateWithoutSecondaryEstablishmentsInput>
    create: XOR<ActivityCreateWithoutSecondaryEstablishmentsInput, ActivityUncheckedCreateWithoutSecondaryEstablishmentsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutSecondaryEstablishmentsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutSecondaryEstablishmentsInput, ActivityUncheckedUpdateWithoutSecondaryEstablishmentsInput>
  }

  export type ActivityUpdateWithoutSecondaryEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainEstablishments?: EstablishmentUpdateManyWithoutMainActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutSecondaryEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainEstablishments?: EstablishmentUncheckedUpdateManyWithoutMainActivityNestedInput
  }

  export type EstablishmentCreateWithoutClassificationInput = {
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mainActivity?: ActivityCreateNestedOneWithoutMainEstablishmentsInput
    secondaryActivity?: ActivityCreateNestedOneWithoutSecondaryEstablishmentsInput
  }

  export type EstablishmentUncheckedCreateWithoutClassificationInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    mainActivityId?: string | null
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentCreateOrConnectWithoutClassificationInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput>
  }

  export type EstablishmentCreateManyClassificationInputEnvelope = {
    data: EstablishmentCreateManyClassificationInput | EstablishmentCreateManyClassificationInput[]
  }

  export type EstablishmentUpsertWithWhereUniqueWithoutClassificationInput = {
    where: EstablishmentWhereUniqueInput
    update: XOR<EstablishmentUpdateWithoutClassificationInput, EstablishmentUncheckedUpdateWithoutClassificationInput>
    create: XOR<EstablishmentCreateWithoutClassificationInput, EstablishmentUncheckedCreateWithoutClassificationInput>
  }

  export type EstablishmentUpdateWithWhereUniqueWithoutClassificationInput = {
    where: EstablishmentWhereUniqueInput
    data: XOR<EstablishmentUpdateWithoutClassificationInput, EstablishmentUncheckedUpdateWithoutClassificationInput>
  }

  export type EstablishmentUpdateManyWithWhereWithoutClassificationInput = {
    where: EstablishmentScalarWhereInput
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyWithoutClassificationInput>
  }

  export type EstablishmentScalarWhereInput = {
    AND?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    OR?: EstablishmentScalarWhereInput[]
    NOT?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    id?: IntFilter<"Establishment"> | number
    cnes?: StringFilter<"Establishment"> | string
    cnpj?: StringFilter<"Establishment"> | string
    tradeName?: StringFilter<"Establishment"> | string
    corporateName?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    zipCode?: StringFilter<"Establishment"> | string
    directorCpf?: StringFilter<"Establishment"> | string
    classificationId?: IntFilter<"Establishment"> | number
    mainActivityId?: StringNullableFilter<"Establishment"> | string | null
    secondaryActivityId?: StringNullableFilter<"Establishment"> | string | null
    susSystem?: BoolFilter<"Establishment"> | boolean
    createdAt?: DateTimeFilter<"Establishment"> | Date | string
    updatedAt?: DateTimeFilter<"Establishment"> | Date | string
  }

  export type EstablishmentCreateWithoutMainActivityInput = {
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: EstablishmentClassificationCreateNestedOneWithoutEstablishmentsInput
    secondaryActivity?: ActivityCreateNestedOneWithoutSecondaryEstablishmentsInput
  }

  export type EstablishmentUncheckedCreateWithoutMainActivityInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentCreateOrConnectWithoutMainActivityInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput>
  }

  export type EstablishmentCreateManyMainActivityInputEnvelope = {
    data: EstablishmentCreateManyMainActivityInput | EstablishmentCreateManyMainActivityInput[]
  }

  export type EstablishmentCreateWithoutSecondaryActivityInput = {
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    classification: EstablishmentClassificationCreateNestedOneWithoutEstablishmentsInput
    mainActivity?: ActivityCreateNestedOneWithoutMainEstablishmentsInput
  }

  export type EstablishmentUncheckedCreateWithoutSecondaryActivityInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    mainActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentCreateOrConnectWithoutSecondaryActivityInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput>
  }

  export type EstablishmentCreateManySecondaryActivityInputEnvelope = {
    data: EstablishmentCreateManySecondaryActivityInput | EstablishmentCreateManySecondaryActivityInput[]
  }

  export type EstablishmentUpsertWithWhereUniqueWithoutMainActivityInput = {
    where: EstablishmentWhereUniqueInput
    update: XOR<EstablishmentUpdateWithoutMainActivityInput, EstablishmentUncheckedUpdateWithoutMainActivityInput>
    create: XOR<EstablishmentCreateWithoutMainActivityInput, EstablishmentUncheckedCreateWithoutMainActivityInput>
  }

  export type EstablishmentUpdateWithWhereUniqueWithoutMainActivityInput = {
    where: EstablishmentWhereUniqueInput
    data: XOR<EstablishmentUpdateWithoutMainActivityInput, EstablishmentUncheckedUpdateWithoutMainActivityInput>
  }

  export type EstablishmentUpdateManyWithWhereWithoutMainActivityInput = {
    where: EstablishmentScalarWhereInput
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyWithoutMainActivityInput>
  }

  export type EstablishmentUpsertWithWhereUniqueWithoutSecondaryActivityInput = {
    where: EstablishmentWhereUniqueInput
    update: XOR<EstablishmentUpdateWithoutSecondaryActivityInput, EstablishmentUncheckedUpdateWithoutSecondaryActivityInput>
    create: XOR<EstablishmentCreateWithoutSecondaryActivityInput, EstablishmentUncheckedCreateWithoutSecondaryActivityInput>
  }

  export type EstablishmentUpdateWithWhereUniqueWithoutSecondaryActivityInput = {
    where: EstablishmentWhereUniqueInput
    data: XOR<EstablishmentUpdateWithoutSecondaryActivityInput, EstablishmentUncheckedUpdateWithoutSecondaryActivityInput>
  }

  export type EstablishmentUpdateManyWithWhereWithoutSecondaryActivityInput = {
    where: EstablishmentScalarWhereInput
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyWithoutSecondaryActivityInput>
  }

  export type EstablishmentCreateManyClassificationInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    mainActivityId?: string | null
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUpdateWithoutClassificationInput = {
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainActivity?: ActivityUpdateOneWithoutMainEstablishmentsNestedInput
    secondaryActivity?: ActivityUpdateOneWithoutSecondaryEstablishmentsNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutClassificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyWithoutClassificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentCreateManyMainActivityInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    secondaryActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentCreateManySecondaryActivityInput = {
    id?: number
    cnes: string
    cnpj: string
    tradeName: string
    corporateName: string
    address: string
    zipCode: string
    directorCpf: string
    classificationId: number
    mainActivityId?: string | null
    susSystem: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EstablishmentUpdateWithoutMainActivityInput = {
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: EstablishmentClassificationUpdateOneRequiredWithoutEstablishmentsNestedInput
    secondaryActivity?: ActivityUpdateOneWithoutSecondaryEstablishmentsNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutMainActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyWithoutMainActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    secondaryActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUpdateWithoutSecondaryActivityInput = {
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: EstablishmentClassificationUpdateOneRequiredWithoutEstablishmentsNestedInput
    mainActivity?: ActivityUpdateOneWithoutMainEstablishmentsNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutSecondaryActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyWithoutSecondaryActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnes?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    corporateName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    directorCpf?: StringFieldUpdateOperationsInput | string
    classificationId?: IntFieldUpdateOperationsInput | number
    mainActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    susSystem?: BoolFieldUpdateOperationsInput | boolean
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