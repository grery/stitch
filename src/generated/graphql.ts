/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Two character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) conformant country code. For example the Republic of South Africa is represented by the characters ZA. The 'ZZ' country code represents an unknown or unspecified country, per the [Unicode CLDR](http://cldr.unicode.org/index/downloads). */
  CountryCode: { input: any; output: any; }
  /** Three character [ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html) conformant currency code. For example the South Africa Rand is represented by the characters ZAR. */
  CurrencyCode: { input: any; output: any; }
  /** Cursor is an opaque string used to retrieve the next or previous page of results from a query. */
  Cursor: { input: any; output: any; }
  /** An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. The Stitch API will normalize all Dates to use the UTC timezone. */
  Date: { input: any; output: any; }
  /**
   * Decimal is a fixed precision signed numeric value encoded as a string. Primarily designed for representing monetary values in a given currency.
   * A decimal value must strictly match the following regular expression `/^-?([0-9]|([1-9][0-9]+))(.[0-9]+)?$/g`
   *
   * Examples of decimal values: `"100"`, `"123.01"`, `"-17.621"`
   */
  Decimal: { input: any; output: any; }
  /** [RFC5322](https://tools.ietf.org/html/rfc5322) compliant email address as detailed in section 3.4.1. of the RFC. */
  EmailAddress: { input: any; output: any; }
  /** A [RFC 1738](https://www.ietf.org/rfc/rfc1738.txt) conformant string pointing to a resource. Supports http and https schemes */
  LenientURL: { input: any; output: any; }
  MimeType: { input: any; output: any; }
  /**
   * Represents an amount of money, in a given currency.
   * Serialized as a JSON object containing quantity of type Decimal, and currency of type CurrencyCode.
   *
   * Example:
   * ```json
   * {
   *     "quantity": "100.23",
   *     "currency": "ZMW"
   * }
   * ```
   */
  Money: { input: any; output: any; }
  /** A positive integer. */
  UInt: { input: any; output: any; }
  /** A [RFC 1738](https://www.ietf.org/rfc/rfc1738.txt) conformant string pointing to a resource. The https scheme is required */
  URL: { input: any; output: any; }
};

/** Request was rejected by the bank due to the account being blocked */
export type AccountBlockedByBank = PaymentInitiationRequestEvent & {
  __typename?: 'AccountBlockedByBank';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Details required to perform a CDV check on a bank account. */
export type AccountCdvInput = {
  /** The bank account number. */
  accountNumber: Scalars['String']['input'];
  /** The bank the account belongs to. */
  bankId: CdvBankId;
  /** An arbitrary reference that will be included in the response. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
};

/** Details of a bank account on which a CDV check was performed. Including the result of the check. */
export type AccountCdvResultPayload = {
  __typename?: 'AccountCDVResultPayload';
  /** The bank account number. */
  accountNumber: Scalars['String']['output'];
  /** The bank the account belongs to. */
  bankId: CdvBankId;
  cdv: CdvResultPayload;
  /** An arbitrary reference that was included in the request. */
  externalReference?: Maybe<Scalars['String']['output']>;
};

/** Describes how the client account is used by Stitch. */
export enum AccountFunction {
  /** Account used by Stitch for payouts on behalf of the client. */
  Float = 'float',
  /** Account used by Stitch to pool funds for specific product types. */
  Pool = 'pool',
  /** Account used by Stitch for payin aggregation. */
  Settlement = 'settlement'
}

export type AccountHolder = Business | Individual;

/**
 * This input type requires that one and only one value is set. For example, it is not possible to specify
 * both a `business` and an `individual`
 */
export type AccountHolderBankAccountVerificationInput = {
  business?: InputMaybe<BusinessBankAccountVerificationInput>;
  individual?: InputMaybe<IndividualBankAccountVerificationInput>;
};

export type AccountHolderFilterInput = {
  Business?: InputMaybe<BusinessFilterInput>;
  Individual?: InputMaybe<IndividualFilterInput>;
  typename?: InputMaybe<AccountHolderUnionFilterDisciminatorFilterInput>;
};

export enum AccountHolderUnionFilterDisciminator {
  Business = 'Business',
  Individual = 'Individual'
}

export type AccountHolderUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  gt?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  gte?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<AccountHolderUnionFilterDisciminator>>>;
  lt?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  lte?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  ne?: InputMaybe<AccountHolderUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<AccountHolderUnionFilterDisciminator>>>;
};

/**
 * The type of a bank account. Usually indicates the intended purpose of the
 * account.
 */
export enum AccountType {
  /** An account with a credit facility. */
  Credit = 'credit',
  /** An account used for day-to-day transactions. */
  Current = 'current',
  /** An account that tracks the balance of an investment. */
  Investment = 'investment',
  /** An account that tracks the balance of a loan. */
  Loan = 'loan',
  /** An unrecognised account type. */
  Other = 'other',
  /** An account used for saving money. */
  Savings = 'savings',
  /** Represents a missing account type. */
  Unknown = 'unknown'
}

export type AccountTypeFilterInput = {
  eq?: InputMaybe<AccountType>;
  gt?: InputMaybe<AccountType>;
  gte?: InputMaybe<AccountType>;
  in?: InputMaybe<Array<InputMaybe<AccountType>>>;
  lt?: InputMaybe<AccountType>;
  lte?: InputMaybe<AccountType>;
  ne?: InputMaybe<AccountType>;
  nin?: InputMaybe<Array<InputMaybe<AccountType>>>;
};

export type AddPayoutBatchPayoutsInput = {
  batchId: Scalars['ID']['input'];
  /** Add disbursements to a batch. The number of disbursements that can be added per call will be limited. */
  disbursements: Array<PayoutBatchDisbursementCreateInput>;
};

export type AddPayoutBatchPayoutsPayload = {
  __typename?: 'AddPayoutBatchPayoutsPayload';
  batchId: Scalars['ID']['output'];
  payouts: PayoutBatchPayoutConnection;
};

export type AddWebhookPayload = {
  __typename?: 'AddWebhookPayload';
  filterTypes?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

/** A physical address. */
export type Address = {
  __typename?: 'Address';
  country?: Maybe<Scalars['CountryCode']['output']>;
  /** Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newline characters. */
  formatted?: Maybe<Scalars['String']['output']>;
  /** City or locality component. */
  locality?: Maybe<Scalars['String']['output']>;
  /** Zip code or postal code component. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** State, province, prefecture or region component. */
  region?: Maybe<Scalars['String']['output']>;
  /** Full street address component, which MAY include house number, street name, Post Office Box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newline characters. */
  streetAddress?: Maybe<Scalars['String']['output']>;
  /** Suburb or sublocality component. */
  sublocality?: Maybe<Scalars['String']['output']>;
};

export type AddressFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  formatted?: InputMaybe<StringFilterInput>;
  locality?: InputMaybe<StringFilterInput>;
  postalCode?: InputMaybe<StringFilterInput>;
  region?: InputMaybe<StringFilterInput>;
  streetAddress?: InputMaybe<StringFilterInput>;
  sublocality?: InputMaybe<StringFilterInput>;
};

export type ApplePayAuthenticationResponses = {
  authenticationData: Scalars['String']['input'];
  merchantIdentifier: Scalars['String']['input'];
  transactionAmount: Scalars['Decimal']['input'];
};

export type ApplePayInput = {
  applicationExpirationDate?: InputMaybe<Scalars['String']['input']>;
  applicationPrimaryAccountNumber?: InputMaybe<Scalars['String']['input']>;
  authenticationResponses?: InputMaybe<Array<InputMaybe<ApplePayAuthenticationResponses>>>;
  cardHolderName?: InputMaybe<Scalars['String']['input']>;
  deviceManufacturerIdentifier?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  merchantTokenIdentifier?: InputMaybe<Scalars['String']['input']>;
  network: CardNetwork;
  paymentDataType?: InputMaybe<ApplePayPaymentDataType>;
  secure3DPaymentData?: InputMaybe<ApplePaySecure3DPaymentData>;
  type: Scalars['String']['input'];
};

export enum ApplePayPaymentDataType {
  Emv = 'EMV',
  Secure3D = 'Secure3D'
}

export type ApplePayPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'ApplePayPaymentMethodDetails';
  enabled: Scalars['Boolean']['output'];
};

export type ApplePayPaymentMethodDetailsFilterInput = {
  enabled?: InputMaybe<BooleanFilterInput>;
};

export type ApplePayPaymentMethodInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ApplePaySecure3DPaymentData = {
  eciIndicator?: InputMaybe<Scalars['String']['input']>;
  onlinePaymentCryptogram: Scalars['String']['input'];
};

/** NOTE: If we accept non-redacted fields in the future, they would be extra top-level inputs here. */
export type ApplePayTransaction = Node & PaymentTransaction & {
  __typename?: 'ApplePayTransaction';
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interactionUrl?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  originalTransaction?: Maybe<PaymentTransaction>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  recurringPaymentConsentRequest?: Maybe<RecurringPaymentConsentRequest>;
  state: TransactionState;
};

/** The claims required for a token to have access to a resource. */
export enum AuthorizationPolicy {
  /** The token is for client queries. */
  IsClientToken = 'isClientToken',
  /** The token is for users belonging to a tenant */
  IsTenantUserToken = 'isTenantUserToken',
  /** The token is for a test user. */
  IsTestUser = 'isTestUser',
  /** The token is for user queries. */
  IsUserToken = 'isUserToken'
}

/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccount = Node & {
  __typename?: 'BankAccount';
  /** The details of the entity that owns the account. This is nullable because we only expect this to exist for at least one of a users accounts, depending on the bank. */
  accountHolder?: Maybe<AccountHolder>;
  /**
   * The account number as displayed in the bank portal.
   * Note that for credit cards, the account number will usually be masked.
   */
  accountNumber: Scalars['String']['output'];
  /**
   * The unmasked account number, if one is available, of a bank account.
   *
   * Some banks mask the true account number for bank accounts.  In cases where the bank does not mask account numbers,
   * Stitch will mask those account numbers by default.
   *
   * In the unlikely event that you find that you absolutely need an unmasked account number, you
   * may query this field.
   *
   * Querying this field puts you in scope for PCI DSS.  Please see https://www.pcisecuritystandards.org/pci_security/
   * for more info.
   *
   * Note that some banks mask account numbers, in those cases this field will still return the masked value.
   *
   * This field requires the following scope:
   *
   * `[pci_unsafe]`
   */
  accountNumber_PCI_UNSAFE?: Maybe<Scalars['String']['output']>;
  accountType: AccountType;
  /**
   * How much money is actually available to spend, usually smaller than the currentBalance
   *
   * This field requires the following scope:
   *
   * `[balances]`
   */
  availableBalance?: Maybe<Scalars['Money']['output']>;
  bankId: BankId;
  /**
   * This field will preferentially use universal branch codes
   * if a given bank supports it.
   */
  branchCode?: Maybe<Scalars['String']['output']>;
  currency: Scalars['CurrencyCode']['output'];
  /**
   * How much money is officially available before pending transactions have cleared. Usually larger than availableBalance
   *
   * This field requires the following scope:
   *
   * `[balances]`
   */
  currentBalance?: Maybe<Scalars['Money']['output']>;
  debiCheckMandates?: Maybe<DebiCheckMandateConnection>;
  /**
   * DebitOrderPayments are ordered in *reverse chronological* order.
   *
   * By default this field returns the bank's default number of visible debit order payments on a single page.
   */
  debitOrderPayments?: Maybe<DebitOrderPaymentConnection>;
  id: Scalars['ID']['output'];
  /**
   * The name of this account. Note that this does not necessarily have
   * semantic significance as many banks allow users to rename their accounts.
   */
  name: Scalars['String']['output'];
  /**
   * An approved transaction that has not been fully processed yet.
   * Commonly, a Card transaction that has been approved, but the funds have not yet moved.
   *
   * PendingTransactions are ordered in *reverse chronological* order.
   *
   * By default this field returns the bank's default number of visible pending transactions.
   */
  pendingTransactions?: Maybe<PendingTransactionConnection>;
  /** Returns a list of available bank statements */
  statements?: Maybe<BankAccountStatementConnection>;
  /** Whether this account can make payments or not */
  supportsPaymentInitiation?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Transactions are ordered in *reverse chronological* order.
   *
   * By default this field returns the bank's default number of visible transactions.
   */
  transactions?: Maybe<TransactionConnection>;
  /** The user attached to this account. */
  user: User;
};


/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccountDebiCheckMandatesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DebiCheckMandateFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccountDebitOrderPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DebitOrderPaymentFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccountPendingTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PendingTransactionFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccountStatementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BankAccountStatementFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * A user's account at a bank.
 *
 * This type requires the following scope:
 *
 * `[accounts]`
 */
export type BankAccountTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TransactionFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};

export type BankAccountFilterInput = {
  accountHolder?: InputMaybe<AccountHolderFilterInput>;
  accountNumber?: InputMaybe<StringFilterInput>;
  accountNumber_PCI_UNSAFE?: InputMaybe<StringFilterInput>;
  accountType?: InputMaybe<AccountTypeFilterInput>;
  availableBalance?: InputMaybe<MoneyFilterInput>;
  bankId?: InputMaybe<BankIdFilterInput>;
  branchCode?: InputMaybe<StringFilterInput>;
  currency?: InputMaybe<CurrencyCodeFilterInput>;
  currentBalance?: InputMaybe<MoneyFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  supportsPaymentInitiation?: InputMaybe<BooleanFilterInput>;
  user?: InputMaybe<UserFilterInput>;
};

export type BankAccountFilterListInput = {
  any?: InputMaybe<BankAccountFilterInput>;
  every?: InputMaybe<BankAccountFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

/**
 * Make a HTTP GET request with the standard authorization header to the `downloadURL` to retrieve the document itself
 *
 * This type requires the following scope:
 *
 * `[bankstatements]`
 */
export type BankAccountStatement = Node & {
  __typename?: 'BankAccountStatement';
  /** The bank account which the statement is for */
  bankAccount: BankAccount;
  /** This indicates if the statement has an official bank stamp. */
  certified: Scalars['Boolean']['output'];
  downloadUrl: Scalars['URL']['output'];
  /** The latest date covered by this statement */
  endDate: Scalars['Date']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mimetype: Scalars['MimeType']['output'];
  /** The earliest date covered by this statement. */
  startDate: Scalars['Date']['output'];
};

export type BankAccountStatementConnection = {
  __typename?: 'BankAccountStatementConnection';
  edges?: Maybe<Array<BankAccountStatementEdge>>;
  pageInfo: PageInfo;
};

export type BankAccountStatementEdge = {
  __typename?: 'BankAccountStatementEdge';
  cursor: Scalars['Cursor']['output'];
  node: BankAccountStatement;
};

export type BankAccountStatementFilterInput = {
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  certified?: InputMaybe<BooleanFilterInput>;
  downloadUrl?: InputMaybe<UrlFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  filename?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mimetype?: InputMaybe<MimeTypeFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
};

/** The banks for which bank account verification is enabled. */
export enum BankAccountVerificationBankIdInput {
  Absa = 'absa',
  AfricanBank = 'african_bank',
  Capitec = 'capitec',
  DiscoveryBank = 'discovery_bank',
  Fnb = 'fnb',
  GrindrodBank = 'grindrod_bank',
  Investec = 'investec',
  Nedbank = 'nedbank',
  SasfinBank = 'sasfin_bank',
  StandardBank = 'standard_bank',
  Tymebank = 'tymebank',
  ZaBidvest = 'za_bidvest'
}

/** All of the data required to verify an individual's bank account. */
export type BankAccountVerificationInput = {
  accountHolder: AccountHolderBankAccountVerificationInput;
  accountNumber: Scalars['String']['input'];
  accountType?: InputMaybe<AccountType>;
  /**
   * The bank. Note that this choice affects the response time, as some banks do not support real time processing.
   * Real time processing can take around 0 - 120 seconds and batch processing can take 20 - 120 minutes.
   */
  bankId?: InputMaybe<BankAccountVerificationBankIdInput>;
  /** The branch code is only required for banks that do not support universal branch codes */
  branchCode?: InputMaybe<Scalars['String']['input']>;
};

/** The name and bank details of a person receiving a payment. */
export type BankBeneficiary = {
  __typename?: 'BankBeneficiary';
  bankAccountNumber: Scalars['String']['output'];
  bankId: BankBeneficiaryBankId;
  name: Scalars['String']['output'];
};

/** The banks for which bank beneficiary payment is enabled. */
export enum BankBeneficiaryBankId {
  Absa = 'absa',
  AccessBank = 'access_bank',
  /** african_bank */
  Capitec = 'capitec',
  DiscoveryBank = 'discovery_bank',
  FirstBankOfNigeria = 'first_bank_of_nigeria',
  Fnb = 'fnb',
  Gtbank = 'gtbank',
  /** grindrod_bank */
  Investec = 'investec',
  Nedbank = 'nedbank',
  ProvidusBank = 'providus_bank',
  SasfinBank = 'sasfin_bank',
  StandardBank = 'standard_bank',
  SterlingBank = 'sterling_bank',
  Tymebank = 'tymebank',
  UnitedBankForAfrica = 'united_bank_for_africa',
  VfdMicrofinanceBank = 'vfd_microfinance_bank',
  WemaBank = 'wema_bank',
  ZaAccessBank = 'za_access_bank',
  ZaAlbarakaBank = 'za_albaraka_bank',
  ZaBankWindhoek = 'za_bank_windhoek',
  ZaBankZero = 'za_bank_zero',
  ZaBidvest = 'za_bidvest',
  ZaBnpParibas = 'za_bnp_paribas',
  ZaCapitecBusiness = 'za_capitec_business',
  ZaCitibank = 'za_citibank',
  ZaFinbondMutualBank = 'za_finbond_mutual_bank',
  ZaFinbondNet1 = 'za_finbond_net1',
  ZaHabibOverseasBank = 'za_habib_overseas_bank',
  ZaHbzBank = 'za_hbz_bank',
  ZaHsbc = 'za_hsbc',
  ZaIthalaBank = 'za_ithala_bank',
  ZaJpMorganChaseBank = 'za_jp_morgan_chase_bank',
  ZaMercantileBank = 'za_mercantile_bank',
  ZaNedbankNamibia = 'za_nedbank_namibia',
  ZaOlympusMobile = 'za_olympus_mobile',
  ZaPeopleBank = 'za_people_bank',
  ZaPostbank = 'za_postbank',
  ZaStandardCharteredBank = 'za_standard_chartered_bank',
  ZaStateBankOfIndia = 'za_state_bank_of_india',
  ZaUBank = 'za_u_bank',
  ZaUnibank = 'za_unibank',
  ZaVbsMutualBank = 'za_vbs_mutual_bank',
  ZenithBank = 'zenith_bank'
}

export type BankBeneficiaryBankIdFilterInput = {
  eq?: InputMaybe<BankBeneficiaryBankId>;
  gt?: InputMaybe<BankBeneficiaryBankId>;
  gte?: InputMaybe<BankBeneficiaryBankId>;
  in?: InputMaybe<Array<InputMaybe<BankBeneficiaryBankId>>>;
  lt?: InputMaybe<BankBeneficiaryBankId>;
  lte?: InputMaybe<BankBeneficiaryBankId>;
  ne?: InputMaybe<BankBeneficiaryBankId>;
  nin?: InputMaybe<Array<InputMaybe<BankBeneficiaryBankId>>>;
};

export type BankBeneficiaryFilterInput = {
  bankAccountNumber?: InputMaybe<StringFilterInput>;
  bankId?: InputMaybe<BankBeneficiaryBankIdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

/** The name and bank details of a person receiving a payment. */
export type BankBeneficiaryInput = {
  accountNumber: Scalars['String']['input'];
  bankId: BankBeneficiaryBankId;
  name: Scalars['String']['input'];
};

export enum BankBeneficiaryType {
  Private = 'private',
  /** Bank registered beneficiary/recipient */
  Public = 'public'
}

/** An error occurred at the bank while processing a request */
export type BankError = PaymentInitiationRequestEvent & {
  __typename?: 'BankError';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type BankFeatureDegradedStatus = BankFeatureStatus & {
  __typename?: 'BankFeatureDegradedStatus';
  description: Scalars['String']['output'];
  since: Scalars['Date']['output'];
};

export type BankFeatureOperationalStatus = BankFeatureStatus & {
  __typename?: 'BankFeatureOperationalStatus';
  description: Scalars['String']['output'];
  since: Scalars['Date']['output'];
};

export type BankFeatureStatus = {
  description: Scalars['String']['output'];
  since: Scalars['Date']['output'];
};

export type BankFeatureUnavailableStatus = BankFeatureStatus & {
  __typename?: 'BankFeatureUnavailableStatus';
  description: Scalars['String']['output'];
  since: Scalars['Date']['output'];
};

export type BankFeatureUnsupportedStatus = BankFeatureStatus & {
  __typename?: 'BankFeatureUnsupportedStatus';
  description: Scalars['String']['output'];
  since: Scalars['Date']['output'];
};

/** Unique identifier for a bank. */
export enum BankId {
  Absa = 'absa',
  AccessBank = 'access_bank',
  AfricanBank = 'african_bank',
  Capitec = 'capitec',
  DiscoveryBank = 'discovery_bank',
  FirstBankOfNigeria = 'first_bank_of_nigeria',
  Fnb = 'fnb',
  GrindrodBank = 'grindrod_bank',
  Gtbank = 'gtbank',
  GtbankMobile = 'gtbank_mobile',
  Investec = 'investec',
  Nedbank = 'nedbank',
  ProvidusBank = 'providus_bank',
  SasfinBank = 'sasfin_bank',
  StandardBank = 'standard_bank',
  SterlingBank = 'sterling_bank',
  Tymebank = 'tymebank',
  UnitedBankForAfrica = 'united_bank_for_africa',
  VfdMicrofinanceBank = 'vfd_microfinance_bank',
  WemaBank = 'wema_bank',
  ZaAccessBank = 'za_access_bank',
  ZaAlbarakaBank = 'za_albaraka_bank',
  ZaBankWindhoek = 'za_bank_windhoek',
  ZaBankZero = 'za_bank_zero',
  ZaBidvest = 'za_bidvest',
  ZaBnpParibas = 'za_bnp_paribas',
  ZaCapitecBusiness = 'za_capitec_business',
  ZaCitibank = 'za_citibank',
  ZaFinbondMutualBank = 'za_finbond_mutual_bank',
  ZaFinbondNet1 = 'za_finbond_net1',
  ZaHabibOverseasBank = 'za_habib_overseas_bank',
  ZaHbzBank = 'za_hbz_bank',
  ZaHsbc = 'za_hsbc',
  ZaIthalaBank = 'za_ithala_bank',
  ZaJpMorganChaseBank = 'za_jp_morgan_chase_bank',
  ZaMercantileBank = 'za_mercantile_bank',
  ZaNedbankNamibia = 'za_nedbank_namibia',
  ZaOlympusMobile = 'za_olympus_mobile',
  ZaPeopleBank = 'za_people_bank',
  ZaPostbank = 'za_postbank',
  ZaStandardCharteredBank = 'za_standard_chartered_bank',
  ZaStateBankOfIndia = 'za_state_bank_of_india',
  ZaUBank = 'za_u_bank',
  ZaUnibank = 'za_unibank',
  ZaVbsMutualBank = 'za_vbs_mutual_bank',
  ZenithBank = 'zenith_bank'
}

export type BankIdFilterInput = {
  eq?: InputMaybe<BankId>;
  in?: InputMaybe<Array<InputMaybe<BankId>>>;
  ne?: InputMaybe<BankId>;
  nin?: InputMaybe<Array<InputMaybe<BankId>>>;
};

export type BankInfo = {
  __typename?: 'BankInfo';
  bankId: BankInfoBankId;
  country: Scalars['CountryCode']['output'];
  name: Scalars['String']['output'];
  state: BankState;
};

/** The bankIds returned from the banks query. */
export enum BankInfoBankId {
  Absa = 'absa',
  AccessBank = 'access_bank',
  Capitec = 'capitec',
  DiscoveryBank = 'discovery_bank',
  FirstBankOfNigeria = 'first_bank_of_nigeria',
  Fnb = 'fnb',
  Gtbank = 'gtbank',
  GtbankMobile = 'gtbank_mobile',
  Investec = 'investec',
  Nedbank = 'nedbank',
  StandardBank = 'standard_bank',
  Tymebank = 'tymebank',
  UnitedBankForAfrica = 'united_bank_for_africa',
  ZenithBank = 'zenith_bank'
}

export type BankState = BankSupportedState | BankUnsupportedState;

export type BankStatus = {
  __typename?: 'BankStatus';
  financialData: BankFeatureStatus;
  login: BankFeatureStatus;
  payments: BankFeatureStatus;
};

export type BankSupportedState = {
  __typename?: 'BankSupportedState';
  featureStatus: BankStatus;
  logoURL: Scalars['URL']['output'];
};

/** The bank timed out while processing a request */
export type BankTimeout = PaymentInitiationRequestEvent & {
  __typename?: 'BankTimeout';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** The bank was partially or fully unavailable while processing a request */
export type BankUnavailable = PaymentInitiationRequestEvent & {
  __typename?: 'BankUnavailable';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type BankUnsupportedState = {
  __typename?: 'BankUnsupportedState';
  description: Scalars['String']['output'];
};

export type Batch = {
  created: Scalars['Date']['output'];
  failedCount?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['ID']['output'];
  nonce: Scalars['String']['output'];
  status: BatchStatus;
  successfulCount?: Maybe<Scalars['Decimal']['output']>;
  /** Counts for the Batch will be updated when the batched item reaches a final state. */
  totalCount?: Maybe<Scalars['Decimal']['output']>;
};

/** All payouts within a Batch have reached a final state, processing is complete */
export type BatchCompleted = {
  __typename?: 'BatchCompleted';
  date: Scalars['Date']['output'];
};

export type BatchCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type BatchConnection = {
  __typename?: 'BatchConnection';
  edges: Array<Maybe<BatchEdge>>;
  pageInfo: PageInfo;
};

/** Batch has been created but is empty, it may not be submitted in this state. */
export type BatchCreated = {
  __typename?: 'BatchCreated';
  date: Scalars['Date']['output'];
};

export type BatchCreatedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type BatchEdge = {
  __typename?: 'BatchEdge';
  cursor: Scalars['Cursor']['output'];
  node: BatchNode;
};

/** An error occured during the submission of a batch or it failed validation */
export type BatchError = {
  __typename?: 'BatchError';
  batchErrorDescription: Scalars['String']['output'];
  batchErrorReason: Scalars['String']['output'];
  date: Scalars['Date']['output'];
};

export type BatchErrorFilterInput = {
  batchErrorDescription?: InputMaybe<StringFilterInput>;
  batchErrorReason?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
};

export type BatchNode = PayoutBatch;

export type BatchNodeFilterInput = {
  PayoutBatch?: InputMaybe<PayoutBatchFilterInput>;
  typename?: InputMaybe<BatchNodeUnionFilterDisciminatorFilterInput>;
};

export enum BatchNodeUnionFilterDisciminator {
  PayoutBatch = 'PayoutBatch'
}

export type BatchNodeUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  gt?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  gte?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<BatchNodeUnionFilterDisciminator>>>;
  lt?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  lte?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  ne?: InputMaybe<BatchNodeUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<BatchNodeUnionFilterDisciminator>>>;
};

/** Batch is in a staging state awaiting submission. Payouts can be added and removed. */
export type BatchPending = {
  __typename?: 'BatchPending';
  date: Scalars['Date']['output'];
};

export type BatchPendingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

/** Batch has been submitted for processing and payouts within the batch are being initiated */
export type BatchProcessing = {
  __typename?: 'BatchProcessing';
  date: Scalars['Date']['output'];
};

export type BatchProcessingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type BatchStatus = BatchCompleted | BatchCreated | BatchError | BatchPending | BatchProcessing;

export type BatchStatusFilterInput = {
  BatchCompleted?: InputMaybe<BatchCompletedFilterInput>;
  BatchCreated?: InputMaybe<BatchCreatedFilterInput>;
  BatchError?: InputMaybe<BatchErrorFilterInput>;
  BatchPending?: InputMaybe<BatchPendingFilterInput>;
  BatchProcessing?: InputMaybe<BatchProcessingFilterInput>;
  typename?: InputMaybe<BatchStatusUnionFilterDisciminatorFilterInput>;
};

export enum BatchStatusUnionFilterDisciminator {
  BatchCompleted = 'BatchCompleted',
  BatchCreated = 'BatchCreated',
  BatchError = 'BatchError',
  BatchPending = 'BatchPending',
  BatchProcessing = 'BatchProcessing'
}

export type BatchStatusUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  gt?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  gte?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<BatchStatusUnionFilterDisciminator>>>;
  lt?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  lte?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  ne?: InputMaybe<BatchStatusUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<BatchStatusUnionFilterDisciminator>>>;
};

/** The details of a person receiving a payment */
export type Beneficiary = BankBeneficiary;

export type BeneficiaryFilterInput = {
  BankBeneficiary?: InputMaybe<BankBeneficiaryFilterInput>;
  typename?: InputMaybe<BeneficiaryUnionFilterDisciminatorFilterInput>;
};

export type BeneficiaryFilterListInput = {
  any?: InputMaybe<BeneficiaryFilterInput>;
  every?: InputMaybe<BeneficiaryFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

export type BeneficiaryInput = {
  /** The bank account that the payment will be made to */
  bankAccount?: InputMaybe<BankBeneficiaryInput>;
  /** A list of bank accounts that the payment could be made to. The most optimal beneficiary account will be selected for a given user. */
  bankAccounts?: InputMaybe<Array<BankBeneficiaryInput>>;
};

/** Beneficiary multifactor authentication was failed or was rejected */
export type BeneficiaryMultifactorFailed = PaymentInitiationRequestEvent & {
  __typename?: 'BeneficiaryMultifactorFailed';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Beneficiary multifactor authentication timed out while awaiting approval */
export type BeneficiaryMultifactorTimeout = PaymentInitiationRequestEvent & {
  __typename?: 'BeneficiaryMultifactorTimeout';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export enum BeneficiaryUnionFilterDisciminator {
  BankBeneficiary = 'BankBeneficiary'
}

export type BeneficiaryUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  gt?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  gte?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<BeneficiaryUnionFilterDisciminator>>>;
  lt?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  lte?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  ne?: InputMaybe<BeneficiaryUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<BeneficiaryUnionFilterDisciminator>>>;
};

export type BooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

/**
 * A business that owns an account.
 *
 * This type requires the following scope:
 *
 * `[accountholders]`
 */
export type Business = {
  __typename?: 'Business';
  /** The name and phone number of a contact person at the business. */
  accountContact?: Maybe<Contact>;
  /** The street address of the business. */
  businessAddress?: Maybe<Address>;
  /** Email address of the business or contact person, if available. */
  email?: Maybe<Scalars['EmailAddress']['output']>;
  /** The registered name of the business. */
  name: Scalars['String']['output'];
  /** Unique identifier for the business. */
  registration?: Maybe<BusinessRegistration>;
  /**
   * Identifier for the business. Unique withing the country the business is registered.
   * @deprecated Use registration instead to receive the country code and registration number.
   */
  registrationNumber?: Maybe<Scalars['String']['output']>;
};

/** Details required to identify a business for bank account verification. */
export type BusinessBankAccountVerificationInput = {
  /**
   * The registered name of the business. For example `"STITCH MONEY PTY LTD"`
   *
   * Specifying `name` is optional.
   */
  name?: InputMaybe<Scalars['String']['input']>;
  registration: BusinessRegistrationInput;
};

export type BusinessFilterInput = {
  accountContact?: InputMaybe<ContactFilterInput>;
  businessAddress?: InputMaybe<AddressFilterInput>;
  email?: InputMaybe<EmailAddressFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  registration?: InputMaybe<BusinessRegistrationFilterInput>;
  registrationNumber?: InputMaybe<StringFilterInput>;
};

/** The details of a business. */
export type BusinessLookup = {
  __typename?: 'BusinessLookup';
  /** The physical address of the business. */
  businessAddress?: Maybe<Address>;
  /** The registration status of the business. */
  businessStatus?: Maybe<BusinessStatus>;
  /** The directors of the business, if available. Only `givenName` and `familyName` fields will be returned. */
  directors?: Maybe<Array<Director>>;
  /** The name of the business. */
  name: Scalars['String']['output'];
  /** Registration number and country of the business. */
  registration: BusinessRegistration;
  /** The date the business was registered. */
  registrationDate?: Maybe<Scalars['Date']['output']>;
};

/**
 * Unique identifier for a business. The registration number is unique for the
 * given country.
 */
export type BusinessRegistration = {
  __typename?: 'BusinessRegistration';
  /** The country where the business is registered. */
  country: Scalars['CountryCode']['output'];
  /**
   * The registration number of the business. In South Africa, depending on
   * the region and when the business was registered, the format could be
   * either a 10-digit number with a letter prefix (eg. `"K1234123456"`), or
   * the number format with slashes (eg. YYYY/######/## or
   * `"2020/518288/03"`)
   */
  number: Scalars['String']['output'];
};

export type BusinessRegistrationFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

/** The registration number of a business in a particular country. */
export type BusinessRegistrationInput = {
  /** The country where the business is registered. */
  country: Scalars['CountryCode']['input'];
  /**
   * The registration number of the business. Depending on the region and when
   * the business was registered, the format could be either a 10-digit number
   * with a letter prefix (eg. `"K1234123456"`), or the number format with
   * slashes (eg. YYYY/######/## or `"2020/518288/03"`)
   */
  number: Scalars['String']['input'];
};

/** The registration status of a business. */
export enum BusinessStatus {
  /** The business has been registered. */
  Active = 'active',
  /** The business is in the process of deregistering. */
  Deregistering = 'deregistering'
}

/** The banks for which CDV is enabled. */
export enum CdvBankId {
  Absa = 'absa',
  AfricanBank = 'african_bank',
  Capitec = 'capitec',
  Fnb = 'fnb',
  Investec = 'investec',
  Nedbank = 'nedbank',
  StandardBank = 'standard_bank',
  StandardBankLesotho = 'standard_bank_lesotho',
  StandardBankSwaziland = 'standard_bank_swaziland',
  ZaBankWindhoek = 'za_bank_windhoek',
  ZaHabibOverseasBank = 'za_habib_overseas_bank',
  ZaHbzBank = 'za_hbz_bank',
  ZaMercantileBank = 'za_mercantile_bank',
  ZaNedbankNamibia = 'za_nedbank_namibia',
  ZaPeopleBank = 'za_people_bank',
  ZaPostbank = 'za_postbank',
  ZaStandardCharteredBank = 'za_standard_chartered_bank'
}

/** A code indicating why the CDV check failed. */
export enum CdvInvalidCode {
  InstitutionNotSupported = 'institution_not_supported',
  InvalidAccount = 'invalid_account',
  InvalidAccountNumberLength = 'invalid_account_number_length'
}

/** Whether or not the CDV check passed. */
export enum CdvResult {
  Invalid = 'invalid',
  Valid = 'valid'
}

/**
 * The result of the CDV check.
 * If the check failed a code & human-readable message will be included.
 */
export type CdvResultPayload = {
  __typename?: 'CDVResultPayload';
  code?: Maybe<CdvInvalidCode>;
  message?: Maybe<Scalars['String']['output']>;
  result: CdvResult;
};

export type CapitecPayInput = {
  /** Account number of the user making the payment. Either identity number or account number must be provided */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identity number of the user making the payment. Either identity number or account number must be provided */
  identityNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CapitecPayTransaction = Node & PaymentTransaction & {
  __typename?: 'CapitecPayTransaction';
  amount: Scalars['Money']['output'];
  beneficiaryStatementDescription?: Maybe<Scalars['String']['output']>;
  clientStatementDescription?: Maybe<Scalars['String']['output']>;
  consentId?: Maybe<Scalars['String']['output']>;
  correlationId?: Maybe<Scalars['String']['output']>;
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifierKey?: Maybe<Scalars['String']['output']>;
  identifierValue?: Maybe<Scalars['String']['output']>;
  interactionUrl?: Maybe<Scalars['String']['output']>;
  merchantName?: Maybe<Scalars['String']['output']>;
  merchantReference?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  originalTransaction?: Maybe<PaymentTransaction>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  recurringPaymentConsentRequest?: Maybe<RecurringPaymentConsentRequest>;
  sourceAccountId?: Maybe<Scalars['String']['output']>;
  sourceAccountNumber?: Maybe<Scalars['String']['output']>;
  state: TransactionState;
};

/** The name CapitecPayInput is in use, hence CapitecPayTransactionInput */
export type CapitecPayTransactionInput = {
  identifierKey: Scalars['String']['input'];
  identifierValue: Scalars['String']['input'];
};

export type Card = Node & {
  __typename?: 'Card';
  cardHolderName: Scalars['String']['output'];
  cardUsageType: CardUsageType;
  clientId?: Maybe<Scalars['String']['output']>;
  expiryMonth: Scalars['UInt']['output'];
  expiryYear: Scalars['UInt']['output'];
  externalUserId?: Maybe<Scalars['String']['output']>;
  first6: Scalars['String']['output'];
  /**
   * NOTE: The Account Number and Security Code aren't available here.
   * Those fields are only mentioned during card creation.
   */
  id: Scalars['ID']['output'];
  last4: Scalars['String']['output'];
  network: CardNetwork;
};

export type CardConnection = {
  __typename?: 'CardConnection';
  edges?: Maybe<Array<CardEdge>>;
  pageInfo: PageInfo;
};

export type CardConsentDetails = {
  __typename?: 'CardConsentDetails';
  authorizationTransaction?: Maybe<CardTransaction>;
  card?: Maybe<Card>;
};

export type CardDetailsInput = {
  cardHolderName: Scalars['String']['input'];
  cardUsageType: CardUsageType;
  expiryMonth: Scalars['UInt']['input'];
  expiryYear: Scalars['UInt']['input'];
  externalUserId?: InputMaybe<Scalars['String']['input']>;
  first6: Scalars['String']['input'];
  last4: Scalars['String']['input'];
  network: CardNetwork;
  redacted: RedactedCardInput;
};

export type CardEdge = {
  __typename?: 'CardEdge';
  cursor: Scalars['Cursor']['output'];
  node: Card;
};

export type CardFilterInput = {
  cardHolderName?: InputMaybe<StringFilterInput>;
  cardUsageType?: InputMaybe<CardUsageTypeFilterInput>;
  clientId?: InputMaybe<StringFilterInput>;
  expiryMonth?: InputMaybe<UIntFilterInput>;
  expiryYear?: InputMaybe<UIntFilterInput>;
  externalUserId?: InputMaybe<StringFilterInput>;
  first6?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last4?: InputMaybe<StringFilterInput>;
  network?: InputMaybe<CardNetworkFilterInput>;
};

export type CardInput = {
  cardDetails?: InputMaybe<CardDetailsInput>;
  /** Used with recurring payments to describe merchant initiated transaction scenario */
  scenario?: InputMaybe<RecurringPaymentScenario>;
};

/** The user selects the card payment method */
export type CardMethodSelected = PaymentInitiationRequestEvent & {
  __typename?: 'CardMethodSelected';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Card types */
export enum CardNetwork {
  Mastercard = 'Mastercard',
  Visa = 'Visa'
}

export type CardNetworkFilterInput = {
  eq?: InputMaybe<CardNetwork>;
  gt?: InputMaybe<CardNetwork>;
  gte?: InputMaybe<CardNetwork>;
  in?: InputMaybe<Array<InputMaybe<CardNetwork>>>;
  lt?: InputMaybe<CardNetwork>;
  lte?: InputMaybe<CardNetwork>;
  ne?: InputMaybe<CardNetwork>;
  nin?: InputMaybe<Array<InputMaybe<CardNetwork>>>;
};

export type CardPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'CardPaymentMethodDetails';
  enabled: Scalars['Boolean']['output'];
};

export type CardPaymentMethodDetailsFilterInput = {
  enabled?: InputMaybe<BooleanFilterInput>;
};

export type CardPaymentMethodInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardRecurringPaymentMethodOptions = {
  __typename?: 'CardRecurringPaymentMethodOptions';
  enabled: Scalars['Boolean']['output'];
};

export type CardRefundTransaction = Node & PaymentTransaction & {
  __typename?: 'CardRefundTransaction';
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interactionUrl?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  originalTransaction?: Maybe<PaymentTransaction>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  recurringPaymentConsentRequest?: Maybe<RecurringPaymentConsentRequest>;
  state: TransactionState;
};

export type CardTransaction = Node & PaymentTransaction & {
  __typename?: 'CardTransaction';
  acsUrl?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Money']['output'];
  card: Card;
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interactionUrl?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  originalTransaction?: Maybe<PaymentTransaction>;
  pareq?: Maybe<Scalars['String']['output']>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  recurringPaymentConsentRequest?: Maybe<RecurringPaymentConsentRequest>;
  refunds?: Maybe<Array<CardRefundTransaction>>;
  state: TransactionState;
};

export enum CardUsageType {
  ClientReturning = 'clientReturning',
  OnceOff = 'onceOff',
  UserReturning = 'userReturning'
}

export type CardUsageTypeFilterInput = {
  eq?: InputMaybe<CardUsageType>;
  gt?: InputMaybe<CardUsageType>;
  gte?: InputMaybe<CardUsageType>;
  in?: InputMaybe<Array<InputMaybe<CardUsageType>>>;
  lt?: InputMaybe<CardUsageType>;
  lte?: InputMaybe<CardUsageType>;
  ne?: InputMaybe<CardUsageType>;
  nin?: InputMaybe<Array<InputMaybe<CardUsageType>>>;
};

export type CashAtmMethodInput = {
  enabled: Scalars['Boolean']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
};

export type CashAtmPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'CashAtmPaymentMethodDetails';
  /** The amount rounded up to the nearest R10 */
  amountRounded: Scalars['Decimal']['output'];
  enabled: Scalars['Boolean']['output'];
  mobileNumber?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
};

export type CashAtmPaymentMethodDetailsFilterInput = {
  amountRounded?: InputMaybe<DecimalFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  mobileNumber?: InputMaybe<StringFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
};

export type CashAtmTransaction = Node & {
  __typename?: 'CashAtmTransaction';
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nonce?: Maybe<Scalars['String']['output']>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  state: TransactionState;
};

export type CashPaymentMethodInput = {
  atm?: InputMaybe<CashAtmMethodInput>;
  retailer?: InputMaybe<CashRetailerMethodInput>;
};

export type CashRetailerMethodInput = {
  enabled: Scalars['Boolean']['input'];
};

export type CashRetailerPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'CashRetailerPaymentMethodDetails';
  barcodeNumber: Scalars['String']['output'];
  barcodeUrl: Scalars['URL']['output'];
  enabled: Scalars['Boolean']['output'];
};

export type CashRetailerPaymentMethodDetailsFilterInput = {
  barcodeNumber?: InputMaybe<StringFilterInput>;
  barcodeUrl?: InputMaybe<UrlFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
};

/** Information about users and clients included in tokens. */
export enum Claim {
  /** Unique identifier for a client. */
  ClientId = 'client_id',
  /** [OpenId subject claim](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims), the value of which is the same as the user id */
  Sub = 'sub',
  /** Unique identifier for a tenant. */
  TenantId = 'tenant_id'
}

export enum ClearingType {
  /** Default type, in which case the payment will be processed by the institutions standard method. */
  Default = 'DEFAULT',
  /** Attempt to clear this payment immediately if the financial institution supports it. Can incur additional cost. */
  Instant = 'INSTANT'
}

/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type Client = Node & {
  __typename?: 'Client';
  /** Returns a list of accounts that are configured on the client. */
  bankAccounts: Array<ClientBankAccount>;
  /** Returns a list of batches ordered in reverse chronological order. */
  batches: BatchConnection;
  /**
   * An array of businesses that match the name provided.
   *
   * This field requires the following scope:
   *
   * `[client_businesslookup]`
   */
  businessByName?: Maybe<BusinessLookup>;
  /**
   * Returns a business for a given registration number, or null if no business with that registration number is found. If using a test client, the registration number 'K1234567890' or '1234/567890/07' will return an example response.
   *
   * This field requires the following scope:
   *
   * `[client_businesslookup]`
   */
  businessByRegistrationNumber?: Maybe<BusinessLookup>;
  /**
   * A list of business names and registration numbers for a given identity or passport number of a director. If using a test client, querying with a South African identity "1234567890" will return an example response.
   *
   * This field requires the following scope:
   *
   * `[client_businesslookup]`
   */
  businessesByDirectorId: Array<BusinessLookup>;
  /** @deprecated Feature under development */
  cards: CardConnection;
  clientId: Scalars['String']['output'];
  directDeposits: DirectDepositConnection;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  disbursements: DisbursementConnection;
  id: Scalars['ID']['output'];
  /**
   * Payment requests are ordered in *reverse chronological* order.
   *
   * The `first` parameter can be used to set the number of payment requests to return, up to a maximum of 2000 payment requests.
   */
  paymentInitiationRequests: PaymentInitiationRequestConnection;
  paymentInitiations: PaymentInitiationConnection;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_refund]`
   */
  refunds: RefundConnection;
  settlements: SettlementConnection;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_paymentrequest]`
   */
  subscriptions?: Maybe<ClientSubscriptionDetails>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_bankaccountverification]`
   */
  verifyBankAccountDetails: VerifiedBankAccountDetails;
  webhookEndpoints?: Maybe<Array<Maybe<Endpoint>>>;
  webhookLogin?: Maybe<WebhookLoginResponse>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientBatchesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<BatchNodeFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientBusinessByNameArgs = {
  businessName: Scalars['String']['input'];
  country: Scalars['CountryCode']['input'];
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientBusinessByRegistrationNumberArgs = {
  input: BusinessRegistrationInput;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientBusinessesByDirectorIdArgs = {
  country: Scalars['CountryCode']['input'];
  directorId: IdentifyingDocumentInput;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientCardsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CardFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientDirectDepositsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DirectDepositFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientDisbursementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DisbursementFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientPaymentInitiationRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentInitiationRequestFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientPaymentInitiationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentInitiationFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientRefundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RefundFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientSettlementsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SettlementFilterInput>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientVerifyBankAccountDetailsArgs = {
  input: BankAccountVerificationInput;
};


/**
 * Data available to requests that have client tokens. Implements the [Relay
 * GraphQL Server Specification](https://relay.dev/docs/guides/graphql-server-specification/).
 */
export type ClientWebhookEndpointsArgs = {
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ClientAddWebhookInput = {
  filterTypes: Array<Scalars['String']['input']>;
  url: Scalars['URL']['input'];
};

/** A client's account at a bank. */
export type ClientBankAccount = Node & {
  __typename?: 'ClientBankAccount';
  accountFunction: AccountFunction;
  /** The account number as displayed in the bank portal. */
  accountNumber: Scalars['String']['output'];
  accountType: AccountType;
  /** How much money is estimated to be available after taking pending transactions into account. */
  availableBalance: Scalars['Money']['output'];
  bankId: BankId;
  /**
   * This field will preferentially use universal branch codes
   * if a given bank supports it.
   */
  branchCode: Scalars['String']['output'];
  /** How much money is officially available before pending transactions have cleared. */
  currentBalance: Scalars['Money']['output'];
  id: Scalars['ID']['output'];
  /**
   * The name of this account. Note that this does not necessarily have
   * semantic significance as many banks allow users to rename their accounts.
   */
  name: Scalars['String']['output'];
  /** Time at which the account balances were updated. */
  updatedAt: Scalars['Date']['output'];
};

export type ClientCancelDisbursementInput = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};

export type ClientDeleteWebhookInput = {
  filterTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  url: Scalars['URL']['input'];
};

export type ClientDisbursementCancelPayload = {
  __typename?: 'ClientDisbursementCancelPayload';
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

/** The bank details of a person receiving a payment. */
export type ClientDisbursementCreateBeneficiaryBankAccountInput = {
  accountNumber: Scalars['String']['input'];
  accountType: AccountType;
  bankId: DisbursementBankBeneficiaryBankId;
  /**
   * Must be between 1 and 20 characters.
   *
   * Any numeric and alpha-numeric values are accepted. However, name length may be truncated according to the banking guidelines.
   */
  name: Scalars['String']['input'];
};

export type ClientDisbursementCreateInput = {
  /** The currency and quantity to be disbursed */
  amount: MoneyInput;
  /** The bank beneficiary of the disbursement */
  bankBeneficiary: ClientDisbursementCreateBeneficiaryBankAccountInput;
  /**
   * The reference that will be displayed on the users statement
   * Any numeric and alpha-numeric values are accepted. However, beneficiaryReference length may be truncated according to the banking guidelines
   */
  beneficiaryReference: Scalars['String']['input'];
  /** Affects how soon the disbursement will be paid out */
  disbursementType?: InputMaybe<DisbursementType>;
  /** Randomly generated unique string to ensure idempotency */
  nonce: Scalars['String']['input'];
  /** Details which identify the recipient of the disbursement. */
  recipientAccountHolder?: InputMaybe<DisbursementCreateRecipientAccountHolderDetailsInput>;
};

export type ClientDisbursementCreatePayload = {
  __typename?: 'ClientDisbursementCreatePayload';
  disbursement: Disbursement;
};

/** The name and bank details of a person/entity receiving a payment. */
export type ClientPaymentAuthorizationRequestCreateBankBeneficiaryInput = {
  /** Account number of the person/entity who will receive the payment/s */
  accountNumber: Scalars['String']['input'];
  /** The type of a bank account. Usually indicates the intended purpose of the account */
  accountType: AccountType;
  /** Bank of the person/entity who will receive the payment/s */
  bankId: BankBeneficiaryBankId;
  /** The beneficiary type i.e public beneficiary or private */
  beneficiaryType: BankBeneficiaryType;
  /** Name of the person/entity who will receive the payment/s */
  name: Scalars['String']['input'];
  /** The reference will appear on the beneficiary's statement */
  reference: Scalars['String']['input'];
};

/** Details of the person/entity who will receive payments once the user has been authorized. */
export type ClientPaymentAuthorizationRequestCreateBeneficiaryInput = {
  /** Bank details of the person/entity who will be receiving the payment/s */
  bankAccount?: InputMaybe<ClientPaymentAuthorizationRequestCreateBankBeneficiaryInput>;
  bankAccounts?: InputMaybe<Array<ClientPaymentAuthorizationRequestCreateBankBeneficiaryInput>>;
};

/** Details required to make an initial payment during the authorization process. */
export type ClientPaymentAuthorizationRequestCreateInitialPaymentInput = {
  amount: MoneyInput;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed */
  externalReference?: InputMaybe<Scalars['String']['input']>;
};

/** Details required to create an authorization request. */
export type ClientPaymentAuthorizationRequestCreateInput = {
  /** Details of the person/entity who will receive payments once the user has been authorized */
  beneficiary: ClientPaymentAuthorizationRequestCreateBeneficiaryInput;
  /** Optional details of an initial payment to make during the authorization flow */
  initialPayment?: InputMaybe<ClientPaymentAuthorizationRequestCreateInitialPaymentInput>;
  /** Optional details specifying the merchant who is issuing the transaction */
  merchantDetails?: InputMaybe<MerchantDetailsInput>;
  /** Details of the user who will be paying once authorized */
  payer: ClientPaymentAuthorizationRequestCreatePayerInput;
};

/** Details required to identify the authorized user. */
export type ClientPaymentAuthorizationRequestCreatePayerInput = {
  /** Account number of the user making the payment. Either identity number or account number must be provided for CapitecPay */
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /** The user's business registration */
  businessRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** Email address of the user. Either email or phone number must be supplied. */
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  /** South African Identity number of the user. Either identity number or account number must be provided for CapitecPay */
  identityNumber?: InputMaybe<Scalars['String']['input']>;
  /** The name of the user */
  name: Scalars['String']['input'];
  /** Unique government issued identifier for the user */
  passportNumber?: InputMaybe<Scalars['String']['input']>;
  /** The date when the user account was created with the client */
  payerCreatedDate?: InputMaybe<Scalars['String']['input']>;
  /** The client's internal identifier for the user. */
  payerId?: InputMaybe<Scalars['String']['input']>;
  /** Phone number of the user. Either email or phone number must be supplied. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** The reference will appear on the payer's statement */
  reference: Scalars['String']['input'];
  /** Optional BankId used to restrict the bank a user may pay from. */
  restrictPayerBank?: InputMaybe<PayerBankId>;
};

/** A newly created authorization request. */
export type ClientPaymentAuthorizationRequestCreatePayload = {
  __typename?: 'ClientPaymentAuthorizationRequestCreatePayload';
  /** The user should be redirected to this URL to complete the authorization flow */
  authorizationRequestUrl: Scalars['URL']['output'];
};

/**
 * The ID of the cancelled payment initiation.
 *
 * This type requires the following scope:
 *
 * `[client_paymentauthorizationrequest]`
 */
export type ClientPaymentInitiationCancelPayload = {
  __typename?: 'ClientPaymentInitiationCancelPayload';
  id: Scalars['ID']['output'];
};

/**
 * The ID of the cancelled payment initiation request.
 *
 * This type requires the following scope:
 *
 * `[client_paymentrequest]`
 */
export type ClientPaymentInitiationRequestCancelPayload = {
  __typename?: 'ClientPaymentInitiationRequestCancelPayload';
  id: Scalars['ID']['output'];
};

/** All of the data required to create a payment request. */
export type ClientPaymentInitiationRequestCreateInput = {
  amount: MoneyInput;
  /**
   * Optional entity receiving the payment.
   * Either `beneficiary` or `merchantId` must be specified.
   */
  beneficiary?: InputMaybe<BeneficiaryInput>;
  /** The payment reference that will appear on the beneficiary's statement. Must be 20 characters or less. */
  beneficiaryReference: Scalars['String']['input'];
  /** Optional Date (ISO 8061) input used to set an expiry on a payment */
  expireAt?: InputMaybe<Scalars['Date']['input']>;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** List of domains permitted to iframe the safelink page that gets served to the user */
  iframeAllowlist?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The name or unique identifier for the merchant */
  merchant?: InputMaybe<Scalars['String']['input']>;
  /** Optional details specifying the merchant who is issuing the transaction */
  merchantDetails?: InputMaybe<MerchantDetailsInput>;
  /**
   * Optional merchant identifier of the entity receiving the payment based on merchant specific configuration.
   * Either `beneficiary` or `merchantId` must be specified.
   */
  merchantId?: InputMaybe<Scalars['String']['input']>;
  /** Optional payer KYC information. Client config will drive which fields are required if any. */
  payerInformation?: InputMaybe<PayerInformationInput>;
  /** The payment reference that will appear on the payers's statement. Must be 12 characters or less. */
  payerReference: Scalars['String']['input'];
  /** Optional field to configure payment methods. */
  paymentMethods?: InputMaybe<PaymentMethodsInput>;
  /** Optional BankId used to restrict which bank a user may pay from. */
  restrictPayerBank?: InputMaybe<PayerBankId>;
};

/**
 * A newly created payment initiation request.
 *
 * This type requires the following scope:
 *
 * `[client_paymentrequest]`
 */
export type ClientPaymentInitiationRequestCreatePayload = {
  __typename?: 'ClientPaymentInitiationRequestCreatePayload';
  paymentInitiationRequest: PaymentInitiationRequest;
};

export type ClientRefundInitiateInput = {
  amount: MoneyInput;
  /**
   * Must be between 1 and 30 characters.
   * The reference that will be displayed on the refunded users statement
   */
  beneficiaryReference: Scalars['String']['input'];
  /** Affects how soon the refund will be paid out */
  clearingType?: InputMaybe<ClearingType>;
  /** Randomly generated unique string to ensure idempotency */
  nonce: Scalars['String']['input'];
  paymentRequestId: Scalars['ID']['input'];
  reason: RefundReason;
};

export type ClientSubscription = {
  __typename?: 'ClientSubscription';
  directDeposits?: Maybe<DirectDepositEventEdge>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  disbursements?: Maybe<DisbursementSubscriptionEventEdge>;
  /**
   * Subscribe to any changes to the payment initation request state
   *
   * This field requires the following scope:
   *
   * `[client_paymentrequest]`
   */
  paymentInitiationRequests?: Maybe<PaymentInitiationRequestSubscriptionEventEdge>;
  /**
   * Subscribe to any changes to the payment initation status (LinkPay)
   *
   * This field requires the following scope:
   *
   * `[client_paymentauthorizationrequest]`
   */
  paymentInitiations?: Maybe<PaymentInitiationSubscriptionEventEdge>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_refund]`
   */
  refunds?: Maybe<RefundSubscriptionEventEdge>;
  settlements?: Maybe<SettlementSubscriptionEventEdge>;
};

export type ClientSubscriptionDetails = {
  __typename?: 'ClientSubscriptionDetails';
  directDeposit?: Maybe<DirectDepositWebhookSubscription>;
  disbursement?: Maybe<DisbursementWebhookSubscription>;
  paymentInitiation?: Maybe<PaymentInitiationWebhookSubscription>;
  paymentInitiationRequest?: Maybe<PaymentInitiationWebhookSubscription>;
  refund?: Maybe<RefundWebhookSubscription>;
  settlement?: Maybe<SettlementWebhookSubscription>;
};

export type ConfirmConsentInput = {
  /** NOTE: Exactly one of the below must be supplied */
  card?: InputMaybe<CardInput>;
  nonce: Scalars['String']['input'];
};

/** The name and phone number of a contact person. */
export type Contact = {
  __typename?: 'Contact';
  /** The name of the contact person. */
  name: Scalars['String']['output'];
  /** The phone number of the contact person. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type ContactFilterInput = {
  name?: InputMaybe<StringFilterInput>;
  phoneNumber?: InputMaybe<StringFilterInput>;
};

export type CountryCodeFilterInput = {
  eq?: InputMaybe<Scalars['CountryCode']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['CountryCode']['input']>>>;
  ne?: InputMaybe<Scalars['CountryCode']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['CountryCode']['input']>>>;
};

export type CreateRecurringPaymentConsentRequestInput = {
  nonce: Scalars['String']['input'];
  /** KYC information of the payer. Certain fields will be required depending on payment methods enabled. */
  payerInformation?: InputMaybe<PayerInformationInput>;
  paymentMethods: RecurringPaymentMethodsInput;
};

export type CryptoPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'CryptoPaymentMethodDetails';
  enabled: Scalars['Boolean']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
};

export type CryptoPaymentMethodDetailsFilterInput = {
  enabled?: InputMaybe<BooleanFilterInput>;
  expiresAt?: InputMaybe<StringFilterInput>;
};

export type CryptoPaymentMethodInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CryptoTransaction = Node & {
  __typename?: 'CryptoTransaction';
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nonce?: Maybe<Scalars['String']['output']>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  state: TransactionState;
};

/** User declared a crypto payment */
export type CryptoUserDeclaredPaid = PaymentInitiationRequestEvent & {
  __typename?: 'CryptoUserDeclaredPaid';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** The wallet a crypto deposit was attempted from is blocked */
export type CryptoWalletBlocked = PaymentInitiationRequestEvent & {
  __typename?: 'CryptoWalletBlocked';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type CurrencyCodeFilterInput = {
  eq?: InputMaybe<Scalars['CurrencyCode']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['CurrencyCode']['input']>>>;
  ne?: InputMaybe<Scalars['CurrencyCode']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['CurrencyCode']['input']>>>;
};

export type DateFilterInput = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

/**
 * A [DebiCheck](https://debicheck.co.za/) is a more secure form of debit order.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type DebiCheckMandate = Node & {
  __typename?: 'DebiCheckMandate';
  /** The bank account on which the mandate has been authorized */
  bankAccount: BankAccount;
  /** The originator and beneficiary of the mandate */
  creditor: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The amount that has been mandated by the user */
  installmentAmount: Scalars['Money']['output'];
  /** The bank generated mandate reference */
  referenceNumber: Scalars['String']['output'];
  /** The mandate status */
  status: Scalars['String']['output'];
};

export type DebiCheckMandateConnection = {
  __typename?: 'DebiCheckMandateConnection';
  edges?: Maybe<Array<DebiCheckMandateEdge>>;
  pageInfo: PageInfo;
};

export type DebiCheckMandateEdge = {
  __typename?: 'DebiCheckMandateEdge';
  cursor: Scalars['Cursor']['output'];
  node: DebiCheckMandate;
};

export type DebiCheckMandateFilterInput = {
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  creditor?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  installmentAmount?: InputMaybe<MoneyFilterInput>;
  referenceNumber?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
};

export enum DebicheckAmountAdjustmentFrequencyEnum {
  Annually = 'annually',
  Biannually = 'biannually',
  Never = 'never',
  Quarterly = 'quarterly',
  Repo = 'repo'
}

export type DebicheckCollection = {
  __typename?: 'DebicheckCollection';
  adjustmentAmount?: Maybe<Scalars['Money']['output']>;
  adjustmentRate?: Maybe<Scalars['Int']['output']>;
  amountAdjustmentFrequency: DebicheckAmountAdjustmentFrequencyEnum;
  collectionDay?: Maybe<Scalars['Int']['output']>;
  collectionFrequency: DebicheckCollectionFrequencyEnum;
  dayAdjustmentAllowed: Scalars['Boolean']['output'];
  debitValueType: DebicheckValueTypeEnum;
  firstCollectionAmount?: Maybe<Scalars['Money']['output']>;
  firstCollectionDate?: Maybe<Scalars['Date']['output']>;
  instalmentAmount?: Maybe<Scalars['Money']['output']>;
  maximumCollectionAmount?: Maybe<Scalars['Money']['output']>;
};

export enum DebicheckCollectionFrequencyEnum {
  /** Monthly with no specific recurring date in the month but a specific cadence i.e. first Thursday of every month */
  AdHoc = 'adHoc',
  Biannually = 'biannually',
  Fortnightly = 'fortnightly',
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export type DebicheckCollectionInput = {
  /**
   * Only one of either 'adjustmentAmount' or 'adjustmentRate' can be provided.
   * One of these fields is required if 'amountAdjustmentFrequency' is 'quarterly', 'biannually', 'annually'
   *
   * adjustmentAmount: The amount to adjust the instalmentAmount by. Can be negative.
   * adjustmentRate: The rate by which the instalmentAmount and the maximumCollectionAmount can be adjusted. Can be negative.
   */
  adjustmentAmount?: InputMaybe<MoneyInput>;
  adjustmentRate?: InputMaybe<Scalars['Int']['input']>;
  /** The frequency at which the instalment and maximum collection amount can be adjusted */
  amountAdjustmentFrequency: DebicheckAmountAdjustmentFrequencyEnum;
  /**
   * A number for the day of the week, or a day of the month, as per the frequency selected in the 'collectionFrequency' field.
   * Weekly: 1 = Monday, to 7 = Sunday
   * Fortnightly: 1 = Monday, to 7 = Sunday (first week). 8 = Monday, to 14 = Sunday (second week).
   * Monthly: 1 - 30
   * Quarterly: 1 - 30, or 99 = last day
   * BiAnnually: 1 - 30, or 99 = last day
   * Adhoc: once a month. 1 = the last Monday, to 6 = last Saturday. 7 = first Monday, to 12 = first Saturday. 14 = 2nd last day. 99 = last day.
   */
  collectionDay?: InputMaybe<Scalars['Int']['input']>;
  collectionFrequency: DebicheckCollectionFrequencyEnum;
  debitValueType: DebicheckValueTypeEnum;
  /**
   * The amount to be collected first against the mandate.
   * This amount will differ from the recurring collection specified by the 'instalmentAmount' field.
   * If this value is provided, the 'firstCollectionDate' is also to be provided.
   */
  firstCollectionAmount?: InputMaybe<MoneyInput>;
  /**
   * The date for the first collection against the mandate.
   * This date will differ from the recurring date specified by the 'collectionDay' field.
   * If this value is provided, the 'firstCollectionAmount' is also to be provided.
   */
  firstCollectionDate?: InputMaybe<Scalars['Date']['input']>;
  /**
   * This field is required if debitValueType is 'fixed', or 'variable'.
   * Must be less than or equal to 'maximumCollectionAmount'
   */
  instalmentAmount?: InputMaybe<MoneyInput>;
  /**
   * If 'debitValueType' is 'usageBased', this value can not be greater than 500,000.00
   * If 'debitValueType' is 'variable' or 'fixed', this value can not be greater than 1.5 times the 'instalmentAmount'
   */
  maximumCollectionAmount?: InputMaybe<MoneyInput>;
};

export type DebicheckConsentDetails = {
  __typename?: 'DebicheckConsentDetails';
  /** Attempt to track the account for up to 10 days following a collection failure. As soon as money comes into the account, the collection will be resubmitted. */
  accountTracking: Scalars['Boolean']['output'];
  collection: DebicheckCollection;
  /** The creditor contract number for the end-user. This will appear on the user's statement. Must be unique per request. */
  contractReference: Scalars['String']['output'];
  customer: DebicheckCustomerInformation;
};

export type DebicheckCustomerInformation = {
  __typename?: 'DebicheckCustomerInformation';
  accountNumber?: Maybe<Scalars['String']['output']>;
  accountType?: Maybe<AccountType>;
  bankId?: Maybe<BankId>;
  fullName?: Maybe<Scalars['String']['output']>;
  identityDocument?: Maybe<IdentifyingDocumentDetails>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type DebicheckPayerBankInformationInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  /** Only 'current' (cheque), 'savings', or 'transmission' accounts are supported. */
  accountType?: InputMaybe<AccountType>;
  bankId?: InputMaybe<BankId>;
};

export type DebicheckPaymentMethodDetails = {
  __typename?: 'DebicheckPaymentMethodDetails';
  accountTracking: Scalars['Boolean']['output'];
  collection: DebicheckCollection;
  contractReference: Scalars['String']['output'];
  customer?: Maybe<DebicheckCustomerInformation>;
};

export type DebicheckRecurringPaymentMethodDetailsInput = {
  /** Attempt to track the account for up to 10 days following a collection failure. As soon as money comes into the account, the collection will be resubmitted. */
  accountTracking: Scalars['Boolean']['input'];
  collection: DebicheckCollectionInput;
  /** The creditor contract number for the end-user. This will appear on the user's statement. Must be unique per request. */
  contractReference: Scalars['String']['input'];
  payerBank?: InputMaybe<DebicheckPayerBankInformationInput>;
};

export type DebicheckRecurringPaymentMethodInput = {
  details: DebicheckRecurringPaymentMethodDetailsInput;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DebicheckRecurringPaymentMethodOptions = {
  __typename?: 'DebicheckRecurringPaymentMethodOptions';
  details?: Maybe<DebicheckPaymentMethodDetails>;
  enabled: Scalars['Boolean']['output'];
};

export enum DebicheckValueTypeEnum {
  Fixed = 'fixed',
  UsageBased = 'usageBased',
  Variable = 'variable'
}

/**
 * A payment created from a debit order.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type DebitOrderPayment = Node & {
  __typename?: 'DebitOrderPayment';
  /** The amount of money paid. */
  amount: Scalars['Money']['output'];
  /** The bank account in which the debit order payment ocurred */
  bankAccount: BankAccount;
  /**
   * The date at which the payment ocurred.  The granularity of the date will largely be at the day level, however if
   * a given bank has more accurate  times available, this will be included in the transaction date.
   */
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  /** The reference as it appears on the user's statement */
  reference: Scalars['String']['output'];
};

export type DebitOrderPaymentConnection = {
  __typename?: 'DebitOrderPaymentConnection';
  edges?: Maybe<Array<DebitOrderPaymentEdge>>;
  pageInfo: PageInfo;
};

export type DebitOrderPaymentEdge = {
  __typename?: 'DebitOrderPaymentEdge';
  cursor: Scalars['Cursor']['output'];
  node: DebitOrderPayment;
};

export type DebitOrderPaymentFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
};

export type DecimalFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  ne?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
};

export type DeleteWebhookPayload = {
  __typename?: 'DeleteWebhookPayload';
  filterTypes?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

/**
 * Detailed result of whether for the account exists as well as confirmation of the user's identity number, initials and last name
 * matching that of the account.
 */
export type DetailedAccountVerificationResults = {
  __typename?: 'DetailedAccountVerificationResults';
  /** Result of whether the account exists. */
  accountExists?: Maybe<VerificationResult>;
  /** Result of whether the user's identity number matches that of the account-holder. */
  identityDocumentMatch?: Maybe<VerificationResult>;
  /** Result of whether the user's initial matches that of the account-holder */
  initialMatch?: Maybe<VerificationResult>;
  /** Result of whether the user's last name matches that of the account-holder. */
  lastNameMatch?: Maybe<VerificationResult>;
};

export type DirectDeposit = Node & {
  __typename?: 'DirectDeposit';
  amount: Scalars['Money']['output'];
  id: Scalars['ID']['output'];
  paymentMethod?: Maybe<PaymentMethod>;
  receivedAt: Scalars['Date']['output'];
  /** Beneficiary reference provided provided as part of the payment confirmation */
  reference: Scalars['String']['output'];
  settlement?: Maybe<Settlement>;
};

/**
 * A paginated array of DirectDeposits, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type DirectDepositConnection = {
  __typename?: 'DirectDepositConnection';
  edges?: Maybe<Array<DirectDepositEdge>>;
  pageInfo: PageInfo;
};

export type DirectDepositEdge = {
  __typename?: 'DirectDepositEdge';
  cursor: Scalars['Cursor']['output'];
  node: DirectDeposit;
};

export type DirectDepositEventEdge = SubscriptionEventEdge & {
  __typename?: 'DirectDepositEventEdge';
  eventId: Scalars['ID']['output'];
  node: DirectDeposit;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type DirectDepositFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  paymentMethod?: InputMaybe<PaymentMethodFilterInput>;
  receivedAt?: InputMaybe<DateFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
  settlement?: InputMaybe<SettlementFilterInput>;
};

export type DirectDepositWebhookSubscription = WebhookSubscription & {
  __typename?: 'DirectDepositWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

/** Identifying details for the director of a business. */
export type Director = {
  __typename?: 'Director';
  /** The date of birth, if available. */
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  /**
   * Surname(s) or last name(s) of the Director. Note that in some cultures,
   * people can have multiple family names or no family name; all can be
   * present, with the names being separated by space characters.
   */
  familyName?: Maybe<Scalars['String']['output']>;
  /** Director full name in title case. */
  fullName?: Maybe<Scalars['String']['output']>;
  /**
   * Given name(s) or first name(s) of the Director. Note that in some
   * cultures, people can have multiple given names; all can be present,
   * with the names being separated by space characters.
   */
  givenName?: Maybe<Scalars['String']['output']>;
  /** The obfuscated ID or passport number. ID numbers in the format of 123456XXXX08X. */
  obfuscatedIdentifyingNumber?: Maybe<Scalars['String']['output']>;
};

export type Disbursement = Node & {
  __typename?: 'Disbursement';
  /** The amount and currency to be disbursed */
  amount: Scalars['Money']['output'];
  /** The bank details of the beneficiary of the disbursement */
  bankBeneficiary: DisbursementBankBeneficiary;
  /** The reference that will be displayed on the users statement */
  beneficiaryReference: Scalars['String']['output'];
  /** The date of disbursement creation */
  created: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  /** This field is populated if the disbursement is linked to a user */
  linkedAccountId?: Maybe<Scalars['ID']['output']>;
  /** Randomly generated unique string to ensure idempotency */
  nonce: Scalars['String']['output'];
  /** The identifying details of the recipient of the disbursement */
  recipientAccountHolder?: Maybe<DisbursementRecipientAccountHolder>;
  /** The status of that disbursement */
  status: DisbursementStatus;
};

export type DisbursementBankBeneficiary = {
  __typename?: 'DisbursementBankBeneficiary';
  accountHolder: Scalars['String']['output'];
  accountNumber: Scalars['String']['output'];
  accountType?: Maybe<AccountType>;
  bankId: DisbursementBankBeneficiaryBankId;
};

/** The banks for which client disbursement is enabled. */
export enum DisbursementBankBeneficiaryBankId {
  Absa = 'absa',
  AfricanBank = 'african_bank',
  Capitec = 'capitec',
  DiscoveryBank = 'discovery_bank',
  Fnb = 'fnb',
  GrindrodBank = 'grindrod_bank',
  Investec = 'investec',
  Nedbank = 'nedbank',
  SasfinBank = 'sasfin_bank',
  StandardBank = 'standard_bank',
  Tymebank = 'tymebank',
  ZaAccessBank = 'za_access_bank',
  ZaAlbarakaBank = 'za_albaraka_bank',
  ZaBankWindhoek = 'za_bank_windhoek',
  ZaBankZero = 'za_bank_zero',
  ZaBidvest = 'za_bidvest',
  ZaBnpParibas = 'za_bnp_paribas',
  ZaCapitecBusiness = 'za_capitec_business',
  ZaCitibank = 'za_citibank',
  ZaFinbondMutualBank = 'za_finbond_mutual_bank',
  ZaFinbondNet1 = 'za_finbond_net1',
  ZaHabibOverseasBank = 'za_habib_overseas_bank',
  ZaHbzBank = 'za_hbz_bank',
  ZaHsbc = 'za_hsbc',
  ZaIthalaBank = 'za_ithala_bank',
  ZaJpMorganChaseBank = 'za_jp_morgan_chase_bank',
  ZaMercantileBank = 'za_mercantile_bank',
  ZaNedbankNamibia = 'za_nedbank_namibia',
  ZaOlympusMobile = 'za_olympus_mobile',
  ZaPeopleBank = 'za_people_bank',
  ZaPostbank = 'za_postbank',
  ZaStandardCharteredBank = 'za_standard_chartered_bank',
  ZaStateBankOfIndia = 'za_state_bank_of_india',
  ZaUBank = 'za_u_bank',
  ZaUnibank = 'za_unibank',
  ZaVbsMutualBank = 'za_vbs_mutual_bank'
}

export type DisbursementBankBeneficiaryBankIdFilterInput = {
  eq?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  gt?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  gte?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  in?: InputMaybe<Array<InputMaybe<DisbursementBankBeneficiaryBankId>>>;
  lt?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  lte?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  ne?: InputMaybe<DisbursementBankBeneficiaryBankId>;
  nin?: InputMaybe<Array<InputMaybe<DisbursementBankBeneficiaryBankId>>>;
};

export type DisbursementBankBeneficiaryFilterInput = {
  accountHolder?: InputMaybe<StringFilterInput>;
  accountNumber?: InputMaybe<StringFilterInput>;
  accountType?: InputMaybe<AccountTypeFilterInput>;
  bankId?: InputMaybe<DisbursementBankBeneficiaryBankIdFilterInput>;
};

/** Disbursement has been cancelled */
export type DisbursementCancelled = {
  __typename?: 'DisbursementCancelled';
  date: Scalars['Date']['output'];
  disbursementCancelledReason: Scalars['String']['output'];
};

export type DisbursementCancelledFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  disbursementCancelledReason?: InputMaybe<StringFilterInput>;
};

/** Bank has successfully processed the disbursement */
export type DisbursementCompleted = {
  __typename?: 'DisbursementCompleted';
  date: Scalars['Date']['output'];
  expectedSettlement: Scalars['Date']['output'];
};

export type DisbursementCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  expectedSettlement?: InputMaybe<DateFilterInput>;
};

export type DisbursementConnection = {
  __typename?: 'DisbursementConnection';
  edges?: Maybe<Array<DisbursementEdge>>;
  pageInfo: PageInfo;
};

/** Details which identify the recipient of the disbursement. */
export type DisbursementCreateRecipientAccountHolderDetailsInput = {
  /** Email address of the recipient. Either email or phone number must be supplied. */
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  /**
   * The name of the recipient
   * Any numeric and alpha-numeric value is accepted. However, name length may be truncated according to the banking guidelines
   */
  name: Scalars['String']['input'];
  /** The client's internal identifier for the user. */
  payeeId?: InputMaybe<Scalars['String']['input']>;
  /** Phone number of the recipient. Either email or phone number must be supplied. */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type DisbursementEdge = {
  __typename?: 'DisbursementEdge';
  cursor: Scalars['Cursor']['output'];
  node: Disbursement;
};

/** Disbursement has failed to complete */
export type DisbursementError = {
  __typename?: 'DisbursementError';
  date: Scalars['Date']['output'];
  disbursementErrorDescription: Scalars['String']['output'];
  disbursementErrorReason: DisbursementErrorReason;
};

export type DisbursementErrorFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  disbursementErrorDescription?: InputMaybe<StringFilterInput>;
  disbursementErrorReason?: InputMaybe<DisbursementErrorReasonFilterInput>;
};

export enum DisbursementErrorReason {
  /** Disbursement was not processed due to failed account verification. */
  AccountVerificationFailed = 'account_verification_failed',
  /** There was a problem communicating with the processing bank. */
  BankError = 'bank_error',
  /** An internal error occurred inside the bank while trying to process the transaction. */
  BankProcessingError = 'bank_processing_error',
  /**
   * The recipient bank did not accept the transaction.
   * Common causes are the beneficiary bank not responding to an RTC payment within the required 60 seconds, or not being enrolled for RTC.
   */
  BeneficiaryBankProcessingError = 'beneficiary_bank_processing_error',
  /** A limit was exceeded. */
  ExceededLimit = 'exceeded_limit',
  /** The account is inactive. This can be remedied by reactivating it. */
  InactiveAccount = 'inactive_account',
  /** The account from which the disbursement was to be made had insufficient_funds for longer than the allowed duration */
  InsufficientFunds = 'insufficient_funds',
  /**
   * (Deprecated) An unknown error has occurred processing the disbursement into the provided beneficiary account.
   * @deprecated No longer supported
   */
  InternalError = 'internal_error',
  /** The account was not found. It may have been closed or cannot process this type of transaction. */
  InvalidAccount = 'invalid_account',
  /**
   * (Deprecated) The provided beneficiary account is invalid.
   * @deprecated No longer supported
   */
  InvalidDestination = 'invalid_destination',
  /** The details (e.g. account number or branch code) were rejected by the bank. */
  InvalidTransactionDetails = 'invalid_transaction_details',
  /** There was a restriction on the account. This could be anything from FICA compliance to the account being manually frozen. */
  RestrictedAccount = 'restricted_account'
}

export type DisbursementErrorReasonFilterInput = {
  eq?: InputMaybe<DisbursementErrorReason>;
  gt?: InputMaybe<DisbursementErrorReason>;
  gte?: InputMaybe<DisbursementErrorReason>;
  in?: InputMaybe<Array<InputMaybe<DisbursementErrorReason>>>;
  lt?: InputMaybe<DisbursementErrorReason>;
  lte?: InputMaybe<DisbursementErrorReason>;
  ne?: InputMaybe<DisbursementErrorReason>;
  nin?: InputMaybe<Array<InputMaybe<DisbursementErrorReason>>>;
};

export type DisbursementFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  bankBeneficiary?: InputMaybe<DisbursementBankBeneficiaryFilterInput>;
  beneficiaryReference?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  linkedAccountId?: InputMaybe<IdFilterInput>;
  nonce?: InputMaybe<StringFilterInput>;
  recipientAccountHolder?: InputMaybe<DisbursementRecipientAccountHolderFilterInput>;
  status?: InputMaybe<DisbursementStatusFilterInput>;
};

/** Disbursement has been paused and requires interaction */
export type DisbursementPaused = {
  __typename?: 'DisbursementPaused';
  date: Scalars['Date']['output'];
  disbursementPausedReason: DisbursementPausedReason;
};

export type DisbursementPausedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  disbursementPausedReason?: InputMaybe<DisbursementPausedReasonFilterInput>;
};

/** Why the disbursement has not been paid out yet. */
export enum DisbursementPausedReason {
  /** The user does not have the necessary funds in their account to complete the request */
  InsufficientFunds = 'insufficient_funds'
}

export type DisbursementPausedReasonFilterInput = {
  eq?: InputMaybe<DisbursementPausedReason>;
  gt?: InputMaybe<DisbursementPausedReason>;
  gte?: InputMaybe<DisbursementPausedReason>;
  in?: InputMaybe<Array<InputMaybe<DisbursementPausedReason>>>;
  lt?: InputMaybe<DisbursementPausedReason>;
  lte?: InputMaybe<DisbursementPausedReason>;
  ne?: InputMaybe<DisbursementPausedReason>;
  nin?: InputMaybe<Array<InputMaybe<DisbursementPausedReason>>>;
};

/** The disbursement has been accepted and is awaiting processing */
export type DisbursementPending = {
  __typename?: 'DisbursementPending';
  date: Scalars['Date']['output'];
};

export type DisbursementPendingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type DisbursementRecipientAccountHolder = {
  __typename?: 'DisbursementRecipientAccountHolder';
  email?: Maybe<Scalars['EmailAddress']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payeeId?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type DisbursementRecipientAccountHolderFilterInput = {
  email?: InputMaybe<EmailAddressFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  payeeId?: InputMaybe<StringFilterInput>;
  phoneNumber?: InputMaybe<StringFilterInput>;
};

/** Disbursement has been reversed */
export type DisbursementReversed = {
  __typename?: 'DisbursementReversed';
  date: Scalars['Date']['output'];
  disbursementReversedDescription: Scalars['String']['output'];
  disbursementReversedReason: DisbursementReversedReason;
};

export type DisbursementReversedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  disbursementReversedDescription?: InputMaybe<StringFilterInput>;
  disbursementReversedReason?: InputMaybe<DisbursementReversedReasonFilterInput>;
};

export enum DisbursementReversedReason {
  /** The account was not found. It may have been closed or cannot process this type of transaction. */
  InvalidAccount = 'invalid_account',
  /**
   * The provided beneficiary account is invalid
   * @deprecated No longer supported
   */
  InvalidDestination = 'invalid_destination'
}

export type DisbursementReversedReasonFilterInput = {
  eq?: InputMaybe<DisbursementReversedReason>;
  gt?: InputMaybe<DisbursementReversedReason>;
  gte?: InputMaybe<DisbursementReversedReason>;
  in?: InputMaybe<Array<InputMaybe<DisbursementReversedReason>>>;
  lt?: InputMaybe<DisbursementReversedReason>;
  lte?: InputMaybe<DisbursementReversedReason>;
  ne?: InputMaybe<DisbursementReversedReason>;
  nin?: InputMaybe<Array<InputMaybe<DisbursementReversedReason>>>;
};

export type DisbursementStatus = DisbursementCancelled | DisbursementCompleted | DisbursementError | DisbursementPaused | DisbursementPending | DisbursementReversed | DisbursementSubmitted;

export type DisbursementStatusFilterInput = {
  DisbursementCancelled?: InputMaybe<DisbursementCancelledFilterInput>;
  DisbursementCompleted?: InputMaybe<DisbursementCompletedFilterInput>;
  DisbursementError?: InputMaybe<DisbursementErrorFilterInput>;
  DisbursementPaused?: InputMaybe<DisbursementPausedFilterInput>;
  DisbursementPending?: InputMaybe<DisbursementPendingFilterInput>;
  DisbursementReversed?: InputMaybe<DisbursementReversedFilterInput>;
  DisbursementSubmitted?: InputMaybe<DisbursementSubmittedFilterInput>;
  typename?: InputMaybe<DisbursementStatusUnionFilterDisciminatorFilterInput>;
};

export enum DisbursementStatusUnionFilterDisciminator {
  DisbursementCancelled = 'DisbursementCancelled',
  DisbursementCompleted = 'DisbursementCompleted',
  DisbursementError = 'DisbursementError',
  DisbursementPaused = 'DisbursementPaused',
  DisbursementPending = 'DisbursementPending',
  DisbursementReversed = 'DisbursementReversed',
  DisbursementSubmitted = 'DisbursementSubmitted'
}

export type DisbursementStatusUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  gt?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  gte?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<DisbursementStatusUnionFilterDisciminator>>>;
  lt?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  lte?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  ne?: InputMaybe<DisbursementStatusUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<DisbursementStatusUnionFilterDisciminator>>>;
};

/** The disbursement has been submitted to bank */
export type DisbursementSubmitted = {
  __typename?: 'DisbursementSubmitted';
  date: Scalars['Date']['output'];
};

export type DisbursementSubmittedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type DisbursementSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'DisbursementSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: Disbursement;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export enum DisbursementType {
  /** Default type, in which case the disbursement will be processed by the institutions standard method. */
  Default = 'DEFAULT',
  /** Attempt to clear this payment immediately if the financial institution supports it. Can incur additional cost. */
  Instant = 'INSTANT'
}

export type DisbursementWebhookSubscription = WebhookSubscription & {
  __typename?: 'DisbursementWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

/** The bank does not allow duplicate payments */
export type DuplicatePayment = PaymentInitiationRequestEvent & {
  __typename?: 'DuplicatePayment';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type EftManualMethodInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
};

export type EftManualPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'EftManualPaymentMethodDetails';
  email?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  mobileNumber?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
};

export type EftManualPaymentMethodDetailsFilterInput = {
  email?: InputMaybe<StringFilterInput>;
  enabled?: InputMaybe<BooleanFilterInput>;
  mobileNumber?: InputMaybe<StringFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
};

export type EftManualTransaction = Node & {
  __typename?: 'EftManualTransaction';
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nonce?: Maybe<Scalars['String']['output']>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  state: TransactionState;
};

export type EftPaymentMethodDetails = PaymentMethodDetails & {
  __typename?: 'EftPaymentMethodDetails';
  enabled: Scalars['Boolean']['output'];
};

export type EftPaymentMethodDetailsFilterInput = {
  enabled?: InputMaybe<BooleanFilterInput>;
};

export type EftPaymentMethodInput = {
  capitecPay?: InputMaybe<CapitecPayInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  manual?: InputMaybe<EftManualMethodInput>;
};

export type EmailAddressFilterInput = {
  eq?: InputMaybe<Scalars['EmailAddress']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  ne?: InputMaybe<Scalars['EmailAddress']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Endpoint = {
  __typename?: 'Endpoint';
  filterTypes?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export enum Environment {
  Live = 'live',
  Test = 'test'
}

/** Information about a failed request. */
export type Failure = Node & {
  __typename?: 'Failure';
  /** Contains additional human readable information about the failure, if available */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  reason: FailureReason;
};

/** The way a request failed. */
export enum FailureReason {
  /** This operation failed due to bank downtime or an unexpected error that ocurred between the integration with the user's bank and the stitch api */
  BankIntegrationFailure = 'bankIntegrationFailure',
  /** Request was cancelled by user */
  Cancelled = 'cancelled',
  /** This operation failed as it exceeded a limit defined on the account */
  ExceededAccountLimits = 'exceededAccountLimits',
  /** The user's bank prohibited execution of the request */
  Forbidden = 'forbidden',
  /** The user does not have the necessary funds in their account to complete the request */
  InsufficientFunds = 'insufficientFunds'
}

/** The location and metadata of an uploaded file. */
export type FileUploadPayload = {
  __typename?: 'FileUploadPayload';
  encoding: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  mimetype: Scalars['MimeType']['output'];
  /** The uploaded file can be retrieved via this URL. File downloads do not require authorization */
  url: Scalars['URL']['output'];
};

export type FloatFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The gender of an individual. */
export enum Gender {
  Female = 'female',
  Male = 'male',
  Unspecified = 'unspecified'
}

export type GenderFilterInput = {
  eq?: InputMaybe<Gender>;
  gt?: InputMaybe<Gender>;
  gte?: InputMaybe<Gender>;
  in?: InputMaybe<Array<InputMaybe<Gender>>>;
  lt?: InputMaybe<Gender>;
  lte?: InputMaybe<Gender>;
  ne?: InputMaybe<Gender>;
  nin?: InputMaybe<Array<InputMaybe<Gender>>>;
};

export type Header = {
  __typename?: 'Header';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type IdFilterInput = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IdentifyingDocument = IdentityDocument | Passport | TemporaryResidence;

export type IdentifyingDocumentDetails = IdentityDocumentDetails | PassportDetails | TemporaryResidenceDetails;

export type IdentifyingDocumentDetailsFilterInput = {
  IdentityDocumentDetails?: InputMaybe<IdentityDocumentDetailsFilterInput>;
  PassportDetails?: InputMaybe<PassportDetailsFilterInput>;
  TemporaryResidenceDetails?: InputMaybe<TemporaryResidenceDetailsFilterInput>;
  typename?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminatorFilterInput>;
};

export enum IdentifyingDocumentDetailsUnionFilterDisciminator {
  IdentityDocumentDetails = 'IdentityDocumentDetails',
  PassportDetails = 'PassportDetails',
  TemporaryResidenceDetails = 'TemporaryResidenceDetails'
}

export type IdentifyingDocumentDetailsUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  gt?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  gte?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>>>;
  lt?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  lte?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  ne?: InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<IdentifyingDocumentDetailsUnionFilterDisciminator>>>;
};

export type IdentifyingDocumentFilterInput = {
  IdentityDocument?: InputMaybe<IdentityDocumentFilterInput>;
  Passport?: InputMaybe<PassportFilterInput>;
  TemporaryResidence?: InputMaybe<TemporaryResidenceFilterInput>;
  typename?: InputMaybe<IdentifyingDocumentUnionFilterDisciminatorFilterInput>;
};

/**
 * This input type requires that one and only one value is set. For example, it is not possible to specify
 * both an `identityDocument` and a `passport`.
 */
export type IdentifyingDocumentInput = {
  identityDocument?: InputMaybe<IdentityDocumentInput>;
  passport?: InputMaybe<PassportInput>;
  temporaryResidenceId?: InputMaybe<TemporaryResidenceIdInput>;
};

export enum IdentifyingDocumentUnionFilterDisciminator {
  IdentityDocument = 'IdentityDocument',
  Passport = 'Passport',
  TemporaryResidence = 'TemporaryResidence'
}

export type IdentifyingDocumentUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  gt?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  gte?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<IdentifyingDocumentUnionFilterDisciminator>>>;
  lt?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  lte?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  ne?: InputMaybe<IdentifyingDocumentUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<IdentifyingDocumentUnionFilterDisciminator>>>;
};

/**
 * Unique identifier for a natural person. The identity number is unique for
 * the given country.
 *
 * This type requires the following scope:
 *
 * `[accountholders]`
 */
export type IdentityDocument = {
  __typename?: 'IdentityDocument';
  /**
   * The country from which this Id document is issued.
   * Sometimes an ID number may be provided without the country, in which
   * case the country code will be set to the value 'ZZ'.
   */
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

/**
 * Unique identifier details for a natural person. The identity number is unique for
 * the given country.
 */
export type IdentityDocumentDetails = {
  __typename?: 'IdentityDocumentDetails';
  /** The country from which this Id document is issued. */
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

export type IdentityDocumentDetailsFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

export type IdentityDocumentFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

/** A unique identifier from a country's ID document. */
export type IdentityDocumentInput = {
  /** The country from which this Id document is issued. */
  country: Scalars['CountryCode']['input'];
  number: Scalars['String']['input'];
};

export type Income = {
  __typename?: 'Income';
  /** A number between 0-1.0 representing the confidence that this is legitimate income */
  confidence: Scalars['Decimal']['output'];
  /** The underlying transaction */
  transaction?: Maybe<Transaction>;
};

export type IncomeConnection = {
  __typename?: 'IncomeConnection';
  edges: Array<IncomeEdge>;
  pageInfo: PageInfo;
  /** Sum of the income for this period */
  totalIncome: Scalars['Money']['output'];
};

export type IncomeEdge = {
  __typename?: 'IncomeEdge';
  cursor: Scalars['Cursor']['output'];
  node: Income;
};

export type IncomeFilterInput = {
  confidence?: InputMaybe<DecimalFilterInput>;
  transaction?: InputMaybe<TransactionFilterInput>;
};

export type IncorrectLoginCredentials = PaymentInitiationRequestEvent & {
  __typename?: 'IncorrectLoginCredentials';
  bankId?: Maybe<BankId>;
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/**
 * A natural person who owns an account.
 *
 * This type requires the following scope:
 *
 * `[accountholders]`
 */
export type Individual = {
  __typename?: 'Individual';
  /** Contact number of the individual, if available */
  contact?: Maybe<Contact>;
  /** Date of Birth of the individual, if available */
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  /** Email address of the individual, if available */
  email?: Maybe<Scalars['EmailAddress']['output']>;
  /** Surname(s) or last name(s) of the Individual. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters. */
  familyName?: Maybe<Scalars['String']['output']>;
  /** Individual's full name, possibly including titles and suffixes */
  fullName?: Maybe<Scalars['String']['output']>;
  /** Individual's gender, possibly unspecified. */
  gender?: Maybe<Gender>;
  /** Given name(s) or first name(s) of the Individual. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters. */
  givenName?: Maybe<Scalars['String']['output']>;
  /** Individual's place of residence. */
  homeAddress?: Maybe<Address>;
  /** A unique identifier for the Individual. */
  identifyingDocument?: Maybe<IdentifyingDocument>;
  /** Middle name(s) of the Individual. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used. */
  middleName?: Maybe<Scalars['String']['output']>;
  /** Casual name of the Individual that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael. */
  nickname?: Maybe<Scalars['String']['output']>;
};

/** Details required to identify an individual for bank account verification. */
export type IndividualBankAccountVerificationInput = {
  /**
   * Surname(s) or last name(s) of the Individual. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
   *
   * Specifying the `familyName` is optional.
   */
  familyName?: InputMaybe<Scalars['String']['input']>;
  identifyingDocument: IdentifyingDocumentInput;
  /**
   * Initials of the account holder. Initials are typically the capital letters that make up the accountholder's given name.
   * For example, if the accountholder's full name is Jonathan Paul Clegg, the initials would be 'JP'.
   *
   * Specifying `initials` is optional.
   */
  initials?: InputMaybe<Scalars['String']['input']>;
};

export type IndividualFilterInput = {
  contact?: InputMaybe<ContactFilterInput>;
  dateOfBirth?: InputMaybe<DateFilterInput>;
  email?: InputMaybe<EmailAddressFilterInput>;
  familyName?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  gender?: InputMaybe<GenderFilterInput>;
  givenName?: InputMaybe<StringFilterInput>;
  homeAddress?: InputMaybe<AddressFilterInput>;
  identifyingDocument?: InputMaybe<IdentifyingDocumentFilterInput>;
  middleName?: InputMaybe<StringFilterInput>;
  nickname?: InputMaybe<StringFilterInput>;
};

export type InputHeader = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** The bank rejected the payment due to the account having insufficient funds */
export type InsufficientFundsForPayment = PaymentInitiationRequestEvent & {
  __typename?: 'InsufficientFundsForPayment';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type IntFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** The destination account was not valid */
export type InvalidDestinationAccount = PaymentInitiationRequestEvent & {
  __typename?: 'InvalidDestinationAccount';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** The source account was not valid */
export type InvalidSourceAccount = PaymentInitiationRequestEvent & {
  __typename?: 'InvalidSourceAccount';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Login multifactor authentication was failed or was rejected */
export type LoginMultifactorFailed = PaymentInitiationRequestEvent & {
  __typename?: 'LoginMultifactorFailed';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Login multifactor authentication timed out while awaiting approval */
export type LoginMultifactorTimeout = PaymentInitiationRequestEvent & {
  __typename?: 'LoginMultifactorTimeout';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Details of the merchant issuing the transaction */
export type MerchantDetailsInput = {
  /** Merchant specific CapitecPay reference */
  capitecPayMerchantReference?: InputMaybe<Scalars['String']['input']>;
  /** Merchant name */
  name: Scalars['String']['input'];
};

export type MimeTypeFilterInput = {
  eq?: InputMaybe<Scalars['MimeType']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MimeType']['input']>>>;
  ne?: InputMaybe<Scalars['MimeType']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MimeType']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type MoneyFilterInput = {
  currency?: InputMaybe<CurrencyCodeFilterInput>;
  quantity?: InputMaybe<DecimalFilterInput>;
};

/** An amount of money. */
export type MoneyInput = {
  currency: Scalars['CurrencyCode']['input'];
  quantity: Scalars['Decimal']['input'];
};

/** The root type in the Stitch API for GraphQL mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientBatchSubmit: SubmitBatchPayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientCancelDisbursement: ClientDisbursementCancelPayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientDisbursementCreate: ClientDisbursementCreatePayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_paymentauthorizationrequest]`
   */
  clientPaymentAuthorizationRequestCreate?: Maybe<ClientPaymentAuthorizationRequestCreatePayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_paymentauthorizationrequest]`
   */
  clientPaymentInitiationCancel?: Maybe<ClientPaymentInitiationCancelPayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_paymentrequest]`
   */
  clientPaymentInitiationRequestCancel?: Maybe<ClientPaymentInitiationRequestCancelPayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_paymentrequest]`
   */
  clientPaymentInitiationRequestCreate?: Maybe<ClientPaymentInitiationRequestCreatePayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientPayoutBatchAddPayouts: AddPayoutBatchPayoutsPayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientPayoutBatchCreate: PayoutBatchCreatePayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_disbursement]`
   */
  clientPayoutBatchRemovePayouts: RemovePayoutBatchPayoutsPayload;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_refund]`
   */
  clientRefundInitiate: RefundInitiatePayload;
  /** Move a subscription to SVIX webhooks */
  clientSubscriptionMigrate?: Maybe<AddWebhookPayload>;
  /** Add a webhook to listen to an event */
  clientWebhookAdd?: Maybe<AddWebhookPayload>;
  /** Remove a webhook */
  clientWebhookDelete?: Maybe<DeleteWebhookPayload>;
  initiateTransaction: PaymentTransaction;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_recurringpaymentconsentrequest]`
   */
  recurringPaymentConsentRequestConfirm: RecurringPaymentConsentRequest;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_recurringpaymentconsentrequest]`
   */
  recurringPaymentConsentRequestCreate: RecurringPaymentConsentRequest;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[client_refund]`
   */
  refundTransactionInitiate: PaymentTransaction;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[tenant_clientcreate]`
   */
  tenantClientCreate: TenantClientCreatePayload;
  /** @deprecated No longer supported */
  testClientComplete3dSecure: Scalars['Boolean']['output'];
  testClientCreateDirectDeposit: TestClientCreateDirectDepositPayload;
  testClientCreatePaymentConfirmation: TestClientCreatePaymentConfirmationPayload;
  testClientPaymentInitiationRequestSimulateComplete: TestClientPaymentInitiationRequestSimulateCompletePayload;
  /**
   * Simulates a bank requesting reauthorization for this user. This mutation is designed to be used for development purposes and only works for test users.
   * Note that all banks require reauthorization. If a bank does not support reauthorization, this mutation will return an error.
   *
   * If this mutation returns a `simulatedReauthorizationType` of app, use the `testUserCompleteAppBasedSimulatedReauthorization` mutation to simulate
   * the user reauthorizing access via their banking app.
   */
  testUserTriggerSimulatedReauthorization: TestUserTriggerSimulatedReauthorizationPayload;
  /** Unsubscribes from a given GraphQL subscription */
  unsubscribe: UnsubscribePayload;
  userDisbursementCreate: UserDisbursementCreatePayload;
  userInitiatePayment?: Maybe<UserInitiatePaymentPayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[paymentinitiationrequest]`
   * @deprecated This field will be removed in a future release.
   */
  userPaymentInitiationRequestCancel?: Maybe<UserPaymentInitiationRequestCancelPayload>;
  /**
   *
   *
   * This field requires the following scope:
   *
   * `[paymentinitiationrequest]`
   * @deprecated This field will be removed in a future release, please use `userInitiatePayment` instead.
   */
  userPaymentInitiationRequestCreate?: Maybe<UserPaymentInitiationRequestCreatePayload>;
  /** @deprecated No longer supported */
  validateApplePayMerchant: ValidateApplePayMerchantPayload;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientBatchSubmitArgs = {
  input: SubmitBatchInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientCancelDisbursementArgs = {
  input: ClientCancelDisbursementInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientDisbursementCreateArgs = {
  input: ClientDisbursementCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPaymentAuthorizationRequestCreateArgs = {
  input: ClientPaymentAuthorizationRequestCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPaymentInitiationCancelArgs = {
  input: PaymentInitiationRequestCancelInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPaymentInitiationRequestCancelArgs = {
  input: PaymentInitiationRequestCancelInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPaymentInitiationRequestCreateArgs = {
  input: ClientPaymentInitiationRequestCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPayoutBatchAddPayoutsArgs = {
  input: AddPayoutBatchPayoutsInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPayoutBatchCreateArgs = {
  input: PayoutBatchCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientPayoutBatchRemovePayoutsArgs = {
  input: RemovePayoutBatchPayoutsInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientRefundInitiateArgs = {
  input: ClientRefundInitiateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientSubscriptionMigrateArgs = {
  subscriptionId: Scalars['ID']['input'];
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientWebhookAddArgs = {
  input: ClientAddWebhookInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationClientWebhookDeleteArgs = {
  input: ClientDeleteWebhookInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationInitiateTransactionArgs = {
  input: TransactionInitiateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationRecurringPaymentConsentRequestConfirmArgs = {
  consentRequestId: Scalars['ID']['input'];
  input: ConfirmConsentInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationRecurringPaymentConsentRequestCreateArgs = {
  input: CreateRecurringPaymentConsentRequestInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationRefundTransactionInitiateArgs = {
  input: RefundTransactionInitiateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationTenantClientCreateArgs = {
  input: TenantClientCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationTestClientComplete3dSecureArgs = {
  cardTransactionId: Scalars['ID']['input'];
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationTestClientCreateDirectDepositArgs = {
  input: TestClientCreateDirectDepositInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationTestClientCreatePaymentConfirmationArgs = {
  input: TestClientCreatePaymentConfirmationInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationTestClientPaymentInitiationRequestSimulateCompleteArgs = {
  input: TestClientPaymentInitiationRequestSimulateCompleteInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationUnsubscribeArgs = {
  input: SubscriptionUnsubscribeInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationUserDisbursementCreateArgs = {
  input: UserDisbursementCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationUserInitiatePaymentArgs = {
  input: UserInitiatePaymentInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationUserPaymentInitiationRequestCancelArgs = {
  input: PaymentInitiationRequestCancelInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationUserPaymentInitiationRequestCreateArgs = {
  input: UserPaymentInitiationRequestCreateInput;
};


/** The root type in the Stitch API for GraphQL mutations. */
export type MutationValidateApplePayMerchantArgs = {
  input: ValidateApplePayMerchantInput;
};

/** The user enters new card details */
export type NewCardCreated = PaymentInitiationRequestEvent & {
  __typename?: 'NewCardCreated';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** An abstract datatype that has a locally unique identifier, allowing a given node to be later queried by id using the `node(id: ID!)` query. */
export type Node = {
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/**
 * Unique identifier for a natural person. The passport number is unique
 * for the given country.
 *
 * This type requires the following scope:
 *
 * `[accountholders]`
 */
export type Passport = {
  __typename?: 'Passport';
  /**
   * The country from which this passport is issued.
   * Sometimes a passport number may be provided without the country, in
   * which case the country code will be set to the value 'ZZ'.
   */
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

/**
 * Unique identifier details for a natural person. The passport number is unique
 * for the given country.
 */
export type PassportDetails = {
  __typename?: 'PassportDetails';
  /** The country from which this passport is issued. */
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

export type PassportDetailsFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

export type PassportFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

/** A unique identifier from a country's passport. */
export type PassportInput = {
  /** The country from which this Id document is issued. */
  country: Scalars['CountryCode']['input'];
  number: Scalars['String']['input'];
};

/** The banks which a user can link or pay from. */
export enum PayerBankId {
  Absa = 'absa',
  Capitec = 'capitec',
  Fnb = 'fnb',
  Investec = 'investec',
  Nedbank = 'nedbank',
  StandardBank = 'standard_bank',
  Tymebank = 'tymebank'
}

export type PayerBankIdFilterInput = {
  eq?: InputMaybe<PayerBankId>;
  gt?: InputMaybe<PayerBankId>;
  gte?: InputMaybe<PayerBankId>;
  in?: InputMaybe<Array<InputMaybe<PayerBankId>>>;
  lt?: InputMaybe<PayerBankId>;
  lte?: InputMaybe<PayerBankId>;
  ne?: InputMaybe<PayerBankId>;
  nin?: InputMaybe<Array<InputMaybe<PayerBankId>>>;
};

export type PayerConstraints = UserBankAccountPayerConstraints | UserPayerConstraints;

export type PayerConstraintsFilterInput = {
  UserBankAccountPayerConstraints?: InputMaybe<UserBankAccountPayerConstraintsFilterInput>;
  UserPayerConstraints?: InputMaybe<UserPayerConstraintsFilterInput>;
  typename?: InputMaybe<PayerConstraintsUnionFilterDisciminatorFilterInput>;
};

export enum PayerConstraintsUnionFilterDisciminator {
  UserBankAccountPayerConstraints = 'UserBankAccountPayerConstraints',
  UserPayerConstraints = 'UserPayerConstraints'
}

export type PayerConstraintsUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  gt?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  gte?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PayerConstraintsUnionFilterDisciminator>>>;
  lt?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  lte?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  ne?: InputMaybe<PayerConstraintsUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PayerConstraintsUnionFilterDisciminator>>>;
};

export type PayerInformation = {
  __typename?: 'PayerInformation';
  /** The date when the payer's account was created with the client */
  accountCreatedDate?: Maybe<Scalars['String']['output']>;
  /** The payer's business registration */
  businessRegistration?: Maybe<BusinessRegistration>;
  /** The payer's email address */
  email?: Maybe<Scalars['String']['output']>;
  /** The payer's full name */
  fullName?: Maybe<Scalars['String']['output']>;
  /** The payer's national identification document */
  identifyingDocument?: Maybe<IdentifyingDocumentDetails>;
  /** The payer's contact number */
  mobileNumber?: Maybe<Scalars['String']['output']>;
  /** The client's internal identifier for the payer */
  payerId?: Maybe<Scalars['String']['output']>;
};

export type PayerInformationFilterInput = {
  accountCreatedDate?: InputMaybe<StringFilterInput>;
  businessRegistration?: InputMaybe<BusinessRegistrationFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  identifyingDocument?: InputMaybe<IdentifyingDocumentDetailsFilterInput>;
  mobileNumber?: InputMaybe<StringFilterInput>;
  payerId?: InputMaybe<StringFilterInput>;
};

/** KYC information for the payer supplied by the client. */
export type PayerInformationInput = {
  /** The date when the payer's account was created with the client */
  accountCreatedDate?: InputMaybe<Scalars['String']['input']>;
  /** The payer's business registration */
  businessRegistration?: InputMaybe<BusinessRegistrationInput>;
  /** The payer's email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The payer's full name */
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** The payer's national identification document */
  identifyingDocument?: InputMaybe<IdentifyingDocumentInput>;
  /** The payer's contact number */
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  /** The client's internal identifier for the payer */
  payerId?: InputMaybe<Scalars['String']['input']>;
};

/** Details of the authorized linked payment account. */
export type PaymentAuthorization = {
  __typename?: 'PaymentAuthorization';
  /** Details of the account that is linked to this authorization */
  bankAccount: BankAccount;
  /**
   * Indicates whether the user session is valid or will require user interaction
   * @deprecated This field will be removed in a future release.
   */
  status: PaymentAuthorizationStatus;
};

export type PaymentAuthorizationFilterInput = {
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  status?: InputMaybe<PaymentAuthorizationStatusFilterInput>;
};

/** Status of the the linked payment account. */
export enum PaymentAuthorizationStatus {
  /** Indicates the payment account is linked and active */
  Valid = 'valid'
}

export type PaymentAuthorizationStatusFilterInput = {
  eq?: InputMaybe<PaymentAuthorizationStatus>;
  gt?: InputMaybe<PaymentAuthorizationStatus>;
  gte?: InputMaybe<PaymentAuthorizationStatus>;
  in?: InputMaybe<Array<InputMaybe<PaymentAuthorizationStatus>>>;
  lt?: InputMaybe<PaymentAuthorizationStatus>;
  lte?: InputMaybe<PaymentAuthorizationStatus>;
  ne?: InputMaybe<PaymentAuthorizationStatus>;
  nin?: InputMaybe<Array<InputMaybe<PaymentAuthorizationStatus>>>;
};

export type PaymentConfirmation = PaymentPending | PaymentReceived | PaymentUnsettled;

export type PaymentConfirmationFilterInput = {
  PaymentPending?: InputMaybe<PaymentPendingFilterInput>;
  PaymentReceived?: InputMaybe<PaymentReceivedFilterInput>;
  PaymentUnsettled?: InputMaybe<PaymentUnsettledFilterInput>;
  typename?: InputMaybe<PaymentConfirmationUnionFilterDisciminatorFilterInput>;
};

export enum PaymentConfirmationUnionFilterDisciminator {
  PaymentPending = 'PaymentPending',
  PaymentReceived = 'PaymentReceived',
  PaymentUnsettled = 'PaymentUnsettled'
}

export type PaymentConfirmationUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  gt?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  gte?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PaymentConfirmationUnionFilterDisciminator>>>;
  lt?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  lte?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  ne?: InputMaybe<PaymentConfirmationUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PaymentConfirmationUnionFilterDisciminator>>>;
};

/** The bank declined the payment */
export type PaymentDeclinedByBank = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentDeclinedByBank';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Details of the authorized payment initiation. */
export type PaymentInitiation = Node & {
  __typename?: 'PaymentInitiation';
  amount: Scalars['Money']['output'];
  /** Details of person/entity who received the payment */
  beneficiary: Beneficiary;
  /** The payment reference that appears on the beneficiary's statement */
  beneficiaryReference?: Maybe<Scalars['String']['output']>;
  /** Date of payment initiation */
  date: Scalars['Date']['output'];
  /** Optional Date (ISO 8601) field used to set an expiry on a payment */
  expireAt?: Maybe<Scalars['Date']['output']>;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed */
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The name or unique identifier for the merchant */
  merchant?: Maybe<Scalars['String']['output']>;
  /** The payment reference that appears on the payers's statement */
  payerReference?: Maybe<Scalars['String']['output']>;
  /** This field indicates the state of the payment relative to the Stitch intermediary account. If your client is not configured with an intermediary account, this field will remain null. */
  paymentConfirmation?: Maybe<PaymentConfirmation>;
  /** Any refunds associated with this PaymentInitiation */
  refunds: Array<Refund>;
  /** Optional BankId used to restrict the bank a user may pay from. */
  restrictPayerBank?: Maybe<PayerBankId>;
  /** A settlement represents a payout made to a client bank account. */
  settlement?: Maybe<Settlement>;
  /** Contains details relating to the status of the payment */
  status: PaymentInitiationStatus;
};

export type PaymentInitiationBankAccountPayer = {
  __typename?: 'PaymentInitiationBankAccountPayer';
  /**
   * The name of this account. Note that this does not necessarily have
   * semantic significance as many banks allow users to rename their accounts.
   */
  accountName: Scalars['String']['output'];
  /**
   * The account number as displayed in the bank portal.
   * Note that for credit cards, the account number will be masked.
   */
  accountNumber: Scalars['String']['output'];
  accountType: AccountType;
  bankId: BankId;
};

export type PaymentInitiationBankAccountPayerFilterInput = {
  accountName?: InputMaybe<StringFilterInput>;
  accountNumber?: InputMaybe<StringFilterInput>;
  accountType?: InputMaybe<AccountTypeFilterInput>;
  bankId?: InputMaybe<BankIdFilterInput>;
};

/** Details relating to a cancelled payment initiation. */
export type PaymentInitiationCancelled = {
  __typename?: 'PaymentInitiationCancelled';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

export type PaymentInitiationCancelledFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
};

export type PaymentInitiationCardPayer = {
  __typename?: 'PaymentInitiationCardPayer';
  cardHolderName: Scalars['String']['output'];
  expiryMonth: Scalars['UInt']['output'];
  expiryYear: Scalars['UInt']['output'];
  first6: Scalars['String']['output'];
  last4: Scalars['String']['output'];
  network: CardNetwork;
};

export type PaymentInitiationCardPayerFilterInput = {
  cardHolderName?: InputMaybe<StringFilterInput>;
  expiryMonth?: InputMaybe<UIntFilterInput>;
  expiryYear?: InputMaybe<UIntFilterInput>;
  first6?: InputMaybe<StringFilterInput>;
  last4?: InputMaybe<StringFilterInput>;
  network?: InputMaybe<CardNetworkFilterInput>;
};

export type PaymentInitiationCashAtmPayer = {
  __typename?: 'PaymentInitiationCashAtmPayer';
  /** This is the actual amount deposited at the ATM */
  amountReceived: Scalars['Money']['output'];
  date: Scalars['Date']['output'];
};

export type PaymentInitiationCashAtmPayerFilterInput = {
  amountReceived?: InputMaybe<MoneyFilterInput>;
  date?: InputMaybe<DateFilterInput>;
};

export type PaymentInitiationCashRetailerPayer = {
  __typename?: 'PaymentInitiationCashRetailerPayer';
  date: Scalars['Date']['output'];
};

export type PaymentInitiationCashRetailerPayerFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

/** Details relating to a successful payment initiation. */
export type PaymentInitiationCompleted = {
  __typename?: 'PaymentInitiationCompleted';
  /** Date of payment completion */
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  /** Details of the person/entity who completed the payment */
  payer: PaymentInitiationPayer;
};

export type PaymentInitiationCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  payer?: InputMaybe<PaymentInitiationPayerFilterInput>;
};

/**
 * A paginated array of PaymentInitiationRequests, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type PaymentInitiationConnection = {
  __typename?: 'PaymentInitiationConnection';
  edges?: Maybe<Array<PaymentInitiationEdge>>;
  pageInfo: PageInfo;
};

export type PaymentInitiationCryptoPayer = {
  __typename?: 'PaymentInitiationCryptoPayer';
  cryptocurrency: Scalars['String']['output'];
  cryptocurrencyAmountReceived: Scalars['Decimal']['output'];
  date: Scalars['Date']['output'];
};

export type PaymentInitiationCryptoPayerFilterInput = {
  cryptocurrency?: InputMaybe<StringFilterInput>;
  cryptocurrencyAmountReceived?: InputMaybe<DecimalFilterInput>;
  date?: InputMaybe<DateFilterInput>;
};

/**
 * A single PaymentInitiation within a connection, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type PaymentInitiationEdge = {
  __typename?: 'PaymentInitiationEdge';
  cursor: Scalars['Cursor']['output'];
  node: PaymentInitiation;
};

export type PaymentInitiationEftManualPayer = {
  __typename?: 'PaymentInitiationEftManualPayer';
  /** This is the actual amount deposited by manual EFT */
  amountReceived: Scalars['Money']['output'];
  date: Scalars['Date']['output'];
};

export type PaymentInitiationEftManualPayerFilterInput = {
  amountReceived?: InputMaybe<MoneyFilterInput>;
  date?: InputMaybe<DateFilterInput>;
};

/** Payment initiation expired before the user attempted to pay */
export type PaymentInitiationExpired = {
  __typename?: 'PaymentInitiationExpired';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
};

export type PaymentInitiationExpiredFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
};

/** Payment initiation has failed to complete. */
export type PaymentInitiationFailed = {
  __typename?: 'PaymentInitiationFailed';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

export type PaymentInitiationFailedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
};

export type PaymentInitiationFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  beneficiary?: InputMaybe<BeneficiaryFilterInput>;
  beneficiaryReference?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  expireAt?: InputMaybe<DateFilterInput>;
  externalReference?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  merchant?: InputMaybe<StringFilterInput>;
  payerReference?: InputMaybe<StringFilterInput>;
  paymentConfirmation?: InputMaybe<PaymentConfirmationFilterInput>;
  refunds?: InputMaybe<RefundFilterListInput>;
  restrictPayerBank?: InputMaybe<PayerBankIdFilterInput>;
  settlement?: InputMaybe<SettlementFilterInput>;
  status?: InputMaybe<PaymentInitiationStatusFilterInput>;
};

export type PaymentInitiationPayer = PaymentInitiationBankAccountPayer | PaymentInitiationCardPayer | PaymentInitiationCashAtmPayer | PaymentInitiationCashRetailerPayer | PaymentInitiationCryptoPayer | PaymentInitiationEftManualPayer;

export type PaymentInitiationPayerFilterInput = {
  PaymentInitiationBankAccountPayer?: InputMaybe<PaymentInitiationBankAccountPayerFilterInput>;
  PaymentInitiationCardPayer?: InputMaybe<PaymentInitiationCardPayerFilterInput>;
  PaymentInitiationCashAtmPayer?: InputMaybe<PaymentInitiationCashAtmPayerFilterInput>;
  PaymentInitiationCashRetailerPayer?: InputMaybe<PaymentInitiationCashRetailerPayerFilterInput>;
  PaymentInitiationCryptoPayer?: InputMaybe<PaymentInitiationCryptoPayerFilterInput>;
  PaymentInitiationEftManualPayer?: InputMaybe<PaymentInitiationEftManualPayerFilterInput>;
  typename?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminatorFilterInput>;
};

export enum PaymentInitiationPayerUnionFilterDisciminator {
  PaymentInitiationBankAccountPayer = 'PaymentInitiationBankAccountPayer',
  PaymentInitiationCardPayer = 'PaymentInitiationCardPayer',
  PaymentInitiationCashAtmPayer = 'PaymentInitiationCashAtmPayer',
  PaymentInitiationCashRetailerPayer = 'PaymentInitiationCashRetailerPayer',
  PaymentInitiationCryptoPayer = 'PaymentInitiationCryptoPayer',
  PaymentInitiationEftManualPayer = 'PaymentInitiationEftManualPayer'
}

export type PaymentInitiationPayerUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  gt?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  gte?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>>>;
  lt?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  lte?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  ne?: InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PaymentInitiationPayerUnionFilterDisciminator>>>;
};

/** Details relating to a pending payment initiation. */
export type PaymentInitiationPending = {
  __typename?: 'PaymentInitiationPending';
  id: Scalars['ID']['output'];
  /** The user should be redirected to this URL to complete the payment */
  url: Scalars['URL']['output'];
};

export type PaymentInitiationPendingFilterInput = {
  id?: InputMaybe<IdFilterInput>;
  url?: InputMaybe<UrlFilterInput>;
};

/** A request to pay an amount to a beneficiary. */
export type PaymentInitiationRequest = Node & {
  __typename?: 'PaymentInitiationRequest';
  amount: Scalars['Money']['output'];
  /** The list of beneficiaries used for the payment. The single beneficiary actually paid is in the PaymentSucceeded state */
  beneficiaries: Array<Beneficiary>;
  /** The payment reference that will appear on the beneficiary's statement */
  beneficiaryReference: Scalars['String']['output'];
  created: Scalars['Date']['output'];
  events: Array<PaymentInitiationRequestEvent>;
  /** Optional Date (ISO 8601) input used to set an expiry on a payment */
  expireAt?: Maybe<Scalars['Date']['output']>;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed. */
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The name or unique identifier for the merchant */
  merchant?: Maybe<Scalars['String']['output']>;
  payerConstraints?: Maybe<PayerConstraints>;
  /** KYC information for the payer supplied by the client. */
  payerInformation?: Maybe<PayerInformation>;
  /** The payment reference that will appear on the user's statement */
  payerReference: Scalars['String']['output'];
  /** This field indicates the state of the payment relative to the Stitch intermediary account. If your client is not configured with an intermediary account, this field will remain null. */
  paymentConfirmation?: Maybe<PaymentConfirmation>;
  paymentMethods?: Maybe<Array<PaymentMethodOptions>>;
  refunds: Array<Refund>;
  /** Optional BankId used to restrict the bank a user may pay from. */
  restrictPayerBank?: Maybe<PayerBankId>;
  /** A settlement represents a payout made to a client bank account. */
  settlement?: Maybe<Settlement>;
  state: PaymentInitiationRequestState;
  updated: Scalars['Date']['output'];
  url: Scalars['URL']['output'];
  /**
   * The payment reference that will appear on the user's statement
   * @deprecated This field will be removed in a future release, please use `payerReference` instead.
   */
  userReference: Scalars['String']['output'];
};

export type PaymentInitiationRequestCancelInput = {
  reason: Scalars['String']['input'];
  requestId: Scalars['ID']['input'];
};

/** The payment has been cancelled and cannot be completed. */
export type PaymentInitiationRequestCancelled = {
  __typename?: 'PaymentInitiationRequestCancelled';
  date: Scalars['Date']['output'];
  /** @deprecated This field does not have it's own identity. Therefore this ID is misleading as it cannot be used in a node query */
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

export type PaymentInitiationRequestCancelledFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
};

/** The payment to the beneficiary has been initiated. */
export type PaymentInitiationRequestCompleted = {
  __typename?: 'PaymentInitiationRequestCompleted';
  amount: Scalars['Money']['output'];
  beneficiary: Beneficiary;
  date: Scalars['Date']['output'];
  /** @deprecated This field does not have it's own identity. Therefore this ID is misleading as it cannot be used in a node query */
  id: Scalars['ID']['output'];
  payer: PaymentInitiationPayer;
  proofOfPayment?: Maybe<Scalars['URL']['output']>;
};

export type PaymentInitiationRequestCompletedFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  beneficiary?: InputMaybe<BeneficiaryFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  payer?: InputMaybe<PaymentInitiationPayerFilterInput>;
  proofOfPayment?: InputMaybe<UrlFilterInput>;
};

/**
 * A paginated array of PaymentInitiationRequests, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type PaymentInitiationRequestConnection = {
  __typename?: 'PaymentInitiationRequestConnection';
  edges?: Maybe<Array<PaymentInitiationRequestEdge>>;
  pageInfo: PageInfo;
};

/**
 * A single PaymentInitiationRequest within a connection, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type PaymentInitiationRequestEdge = {
  __typename?: 'PaymentInitiationRequestEdge';
  cursor: Scalars['Cursor']['output'];
  node: PaymentInitiationRequest;
};

/** InstantPay (please don't re-use for LinkPay) */
export type PaymentInitiationRequestEvent = {
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type PaymentInitiationRequestEventFilterInput = {
  description?: InputMaybe<StringFilterInput>;
  occurred?: InputMaybe<DateFilterInput>;
  paymentMethod?: InputMaybe<StringFilterInput>;
  typename?: InputMaybe<StringFilterInput>;
};

export type PaymentInitiationRequestEventFilterListInput = {
  any?: InputMaybe<PaymentInitiationRequestEventFilterInput>;
  every?: InputMaybe<PaymentInitiationRequestEventFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

/** Payment initiation request expired before the user attempted to pay */
export type PaymentInitiationRequestExpired = {
  __typename?: 'PaymentInitiationRequestExpired';
  date: Scalars['Date']['output'];
};

export type PaymentInitiationRequestExpiredFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type PaymentInitiationRequestFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  beneficiaries?: InputMaybe<BeneficiaryFilterListInput>;
  beneficiaryReference?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  events?: InputMaybe<PaymentInitiationRequestEventFilterListInput>;
  expireAt?: InputMaybe<DateFilterInput>;
  externalReference?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  merchant?: InputMaybe<StringFilterInput>;
  payerConstraints?: InputMaybe<PayerConstraintsFilterInput>;
  payerInformation?: InputMaybe<PayerInformationFilterInput>;
  payerReference?: InputMaybe<StringFilterInput>;
  paymentConfirmation?: InputMaybe<PaymentConfirmationFilterInput>;
  paymentMethods?: InputMaybe<PaymentMethodOptionsFilterListInput>;
  refunds?: InputMaybe<RefundFilterListInput>;
  restrictPayerBank?: InputMaybe<PayerBankIdFilterInput>;
  settlement?: InputMaybe<SettlementFilterInput>;
  state?: InputMaybe<PaymentInitiationRequestStateFilterInput>;
  updated?: InputMaybe<DateFilterInput>;
  url?: InputMaybe<UrlFilterInput>;
  userReference?: InputMaybe<StringFilterInput>;
};

/** The payment request was manually marked as completed. No payment exists for the PaymentInitiationRequest. */
export type PaymentInitiationRequestManuallyCompleted = {
  __typename?: 'PaymentInitiationRequestManuallyCompleted';
  date: Scalars['Date']['output'];
};

export type PaymentInitiationRequestManuallyCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

/** The payment has not yet been initiated, waiting for user to complete request */
export type PaymentInitiationRequestPending = {
  __typename?: 'PaymentInitiationRequestPending';
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
};

export type PaymentInitiationRequestPendingFilterInput = {
  paymentInitiationRequest?: InputMaybe<PaymentInitiationRequestFilterInput>;
};

export type PaymentInitiationRequestState = PaymentInitiationRequestCancelled | PaymentInitiationRequestCompleted | PaymentInitiationRequestExpired | PaymentInitiationRequestManuallyCompleted | PaymentInitiationRequestPending;

export type PaymentInitiationRequestStateFilterInput = {
  PaymentInitiationRequestCancelled?: InputMaybe<PaymentInitiationRequestCancelledFilterInput>;
  PaymentInitiationRequestCompleted?: InputMaybe<PaymentInitiationRequestCompletedFilterInput>;
  PaymentInitiationRequestExpired?: InputMaybe<PaymentInitiationRequestExpiredFilterInput>;
  PaymentInitiationRequestManuallyCompleted?: InputMaybe<PaymentInitiationRequestManuallyCompletedFilterInput>;
  PaymentInitiationRequestPending?: InputMaybe<PaymentInitiationRequestPendingFilterInput>;
  typename?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminatorFilterInput>;
};

export enum PaymentInitiationRequestStateUnionFilterDisciminator {
  PaymentInitiationRequestCancelled = 'PaymentInitiationRequestCancelled',
  PaymentInitiationRequestCompleted = 'PaymentInitiationRequestCompleted',
  PaymentInitiationRequestExpired = 'PaymentInitiationRequestExpired',
  PaymentInitiationRequestManuallyCompleted = 'PaymentInitiationRequestManuallyCompleted',
  PaymentInitiationRequestPending = 'PaymentInitiationRequestPending'
}

export type PaymentInitiationRequestStateUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  gt?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  gte?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>>>;
  lt?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  lte?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  ne?: InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PaymentInitiationRequestStateUnionFilterDisciminator>>>;
};

export type PaymentInitiationRequestSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'PaymentInitiationRequestSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: PaymentInitiationRequest;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type PaymentInitiationStatus = PaymentInitiationCancelled | PaymentInitiationCompleted | PaymentInitiationExpired | PaymentInitiationFailed | PaymentInitiationPending;

export type PaymentInitiationStatusFilterInput = {
  PaymentInitiationCancelled?: InputMaybe<PaymentInitiationCancelledFilterInput>;
  PaymentInitiationCompleted?: InputMaybe<PaymentInitiationCompletedFilterInput>;
  PaymentInitiationExpired?: InputMaybe<PaymentInitiationExpiredFilterInput>;
  PaymentInitiationFailed?: InputMaybe<PaymentInitiationFailedFilterInput>;
  PaymentInitiationPending?: InputMaybe<PaymentInitiationPendingFilterInput>;
  typename?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminatorFilterInput>;
};

export enum PaymentInitiationStatusUnionFilterDisciminator {
  PaymentInitiationCancelled = 'PaymentInitiationCancelled',
  PaymentInitiationCompleted = 'PaymentInitiationCompleted',
  PaymentInitiationExpired = 'PaymentInitiationExpired',
  PaymentInitiationFailed = 'PaymentInitiationFailed',
  PaymentInitiationPending = 'PaymentInitiationPending'
}

export type PaymentInitiationStatusUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  gt?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  gte?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>>>;
  lt?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  lte?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  ne?: InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PaymentInitiationStatusUnionFilterDisciminator>>>;
};

export type PaymentInitiationSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'PaymentInitiationSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: PaymentInitiation;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type PaymentInitiationWebhookSubscription = WebhookSubscription & {
  __typename?: 'PaymentInitiationWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

/** The bank declined the payment because the payment exceeded the current limits */
export type PaymentLimitsExceeded = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentLimitsExceeded';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export enum PaymentMethod {
  Cash = 'cash',
  Eft = 'eft'
}

export type PaymentMethodDetails = {
  enabled: Scalars['Boolean']['output'];
};

export type PaymentMethodFilterInput = {
  eq?: InputMaybe<PaymentMethod>;
  gt?: InputMaybe<PaymentMethod>;
  gte?: InputMaybe<PaymentMethod>;
  in?: InputMaybe<Array<InputMaybe<PaymentMethod>>>;
  lt?: InputMaybe<PaymentMethod>;
  lte?: InputMaybe<PaymentMethod>;
  ne?: InputMaybe<PaymentMethod>;
  nin?: InputMaybe<Array<InputMaybe<PaymentMethod>>>;
};

export type PaymentMethodOptions = ApplePayPaymentMethodDetails | CardPaymentMethodDetails | CashAtmPaymentMethodDetails | CashRetailerPaymentMethodDetails | CryptoPaymentMethodDetails | EftManualPaymentMethodDetails | EftPaymentMethodDetails;

export type PaymentMethodOptionsFilterInput = {
  ApplePayPaymentMethodDetails?: InputMaybe<ApplePayPaymentMethodDetailsFilterInput>;
  CardPaymentMethodDetails?: InputMaybe<CardPaymentMethodDetailsFilterInput>;
  CashAtmPaymentMethodDetails?: InputMaybe<CashAtmPaymentMethodDetailsFilterInput>;
  CashRetailerPaymentMethodDetails?: InputMaybe<CashRetailerPaymentMethodDetailsFilterInput>;
  CryptoPaymentMethodDetails?: InputMaybe<CryptoPaymentMethodDetailsFilterInput>;
  EftManualPaymentMethodDetails?: InputMaybe<EftManualPaymentMethodDetailsFilterInput>;
  EftPaymentMethodDetails?: InputMaybe<EftPaymentMethodDetailsFilterInput>;
  typename?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminatorFilterInput>;
};

export type PaymentMethodOptionsFilterListInput = {
  any?: InputMaybe<PaymentMethodOptionsFilterInput>;
  every?: InputMaybe<PaymentMethodOptionsFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

export enum PaymentMethodOptionsUnionFilterDisciminator {
  ApplePayPaymentMethodDetails = 'ApplePayPaymentMethodDetails',
  CardPaymentMethodDetails = 'CardPaymentMethodDetails',
  CashAtmPaymentMethodDetails = 'CashAtmPaymentMethodDetails',
  CashRetailerPaymentMethodDetails = 'CashRetailerPaymentMethodDetails',
  CryptoPaymentMethodDetails = 'CryptoPaymentMethodDetails',
  EftManualPaymentMethodDetails = 'EftManualPaymentMethodDetails',
  EftPaymentMethodDetails = 'EftPaymentMethodDetails'
}

export type PaymentMethodOptionsUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  gt?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  gte?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>>>;
  lt?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  lte?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  ne?: InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<PaymentMethodOptionsUnionFilterDisciminator>>>;
};

export type PaymentMethodsInput = {
  eft?: InputMaybe<EftPaymentMethodInput>;
};

export type PaymentMethodsTransactionInput = {
  applePay?: InputMaybe<ApplePayInput>;
  capitecPay?: InputMaybe<CapitecPayTransactionInput>;
  /** Exactly one of these fields needs to be specified and should contain the payment method specific data */
  card?: InputMaybe<CardInput>;
};

/** The bank declined the payment due to payment minimum not met */
export type PaymentMinimumNotMet = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentMinimumNotMet';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Payment multifactor authentication was failed or was rejected */
export type PaymentMultifactorFailed = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentMultifactorFailed';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Payment multifactor authentication timed out while awaiting approval */
export type PaymentMultifactorTimeout = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentMultifactorTimeout';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Payment has not yet been received into the Stitch intermediary account */
export type PaymentPending = {
  __typename?: 'PaymentPending';
  /** Date the paymentConfirmation was marked as pending */
  date: Scalars['Date']['output'];
};

export type PaymentPendingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

/** Payment was received into the Stitch intermediary account */
export type PaymentReceived = {
  __typename?: 'PaymentReceived';
  estimatedSettlement: Scalars['Date']['output'];
  received: Scalars['Date']['output'];
};

export type PaymentReceivedFilterInput = {
  estimatedSettlement?: InputMaybe<DateFilterInput>;
  received?: InputMaybe<DateFilterInput>;
};

/** Payment request blocked due to fraud or transactional limits */
export type PaymentRequestBlocked = PaymentInitiationRequestEvent & {
  __typename?: 'PaymentRequestBlocked';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type PaymentTransaction = {
  amount: Scalars['Money']['output'];
  externalReference?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interactionUrl?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['String']['output']>;
  originalTransaction?: Maybe<PaymentTransaction>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  recurringPaymentConsentRequest?: Maybe<RecurringPaymentConsentRequest>;
  state: TransactionState;
};

export type PaymentTransactionConnection = {
  __typename?: 'PaymentTransactionConnection';
  edges?: Maybe<Array<PaymentTransaction>>;
  pageInfo: PageInfo;
};

/** Payment was not received after 7 days */
export type PaymentUnsettled = {
  __typename?: 'PaymentUnsettled';
  description: Scalars['String']['output'];
};

export type PaymentUnsettledFilterInput = {
  description?: InputMaybe<StringFilterInput>;
};

export type PayoutBatch = Batch & Node & {
  __typename?: 'PayoutBatch';
  created: Scalars['Date']['output'];
  failedCount?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['ID']['output'];
  nonce: Scalars['String']['output'];
  /** Returns all payouts in a Batch. Payouts are sorted in reverse chronological order and are paged with a limit of 500 per page. */
  payouts: PayoutBatchPayoutConnection;
  status: BatchStatus;
  successfulCount?: Maybe<Scalars['Decimal']['output']>;
  totalCount?: Maybe<Scalars['Decimal']['output']>;
};


export type PayoutBatchPayoutsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};

export type PayoutBatchConnection = {
  __typename?: 'PayoutBatchConnection';
  edges: Array<Maybe<PayoutBatchEdge>>;
  pageInfo: PageInfo;
};

export type PayoutBatchCreateInput = {
  /**
   * Disbursements can optionally be added to a batch on creation or a batch may be created with no disbursements.
   * The number of items allowed to be included here will be limited.
   */
  disbursements?: InputMaybe<Array<PayoutBatchDisbursementCreateInput>>;
  nonce: Scalars['String']['input'];
};

export type PayoutBatchCreatePayload = {
  __typename?: 'PayoutBatchCreatePayload';
  batch: PayoutBatch;
};

export type PayoutBatchDisbursementCreateInput = {
  amount: MoneyInput;
  bankBeneficiary: ClientDisbursementCreateBeneficiaryBankAccountInput;
  beneficiaryReference: Scalars['String']['input'];
  nonce: Scalars['String']['input'];
  recipientAccountHolder?: InputMaybe<DisbursementCreateRecipientAccountHolderDetailsInput>;
};

export type PayoutBatchEdge = {
  __typename?: 'PayoutBatchEdge';
  cursor: Scalars['Cursor']['output'];
  node: PayoutBatch;
};

export type PayoutBatchFilterInput = {
  created?: InputMaybe<DateFilterInput>;
  failedCount?: InputMaybe<DecimalFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nonce?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<BatchStatusFilterInput>;
  successfulCount?: InputMaybe<DecimalFilterInput>;
  totalCount?: InputMaybe<DecimalFilterInput>;
};

export type PayoutBatchPayout = Disbursement;

export type PayoutBatchPayoutConnection = {
  __typename?: 'PayoutBatchPayoutConnection';
  edges: Array<Maybe<PayoutBatchPayoutEdge>>;
  pageInfo: PageInfo;
};

export type PayoutBatchPayoutEdge = {
  __typename?: 'PayoutBatchPayoutEdge';
  cursor: Scalars['Cursor']['output'];
  node: PayoutBatchPayout;
};

export type PayoutBatchSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'PayoutBatchSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: PayoutBatch;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type PayoutBatchWebhookSubscription = WebhookSubscription & {
  __typename?: 'PayoutBatchWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

/**
 * Transactions that have been made, but the funds have not yet moved.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type PendingTransaction = Node & {
  __typename?: 'PendingTransaction';
  /**
   * Positive values represent an inflow into the account. Conversely negative values represent
   * money leaving the account.
   */
  amount: Scalars['Money']['output'];
  /** The bank account in which the transaction occurred */
  bankAccount: BankAccount;
  /**
   * The date at which the transaction ocurred.
   * The granularity of the transaction date will largely be
   * at the day level, however if a given bank has more accurate
   * times available, this will be included in the transaction date.
   */
  date: Scalars['Date']['output'];
  /** The description of the transaction as it appears in the user's statement */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type PendingTransactionConnection = {
  __typename?: 'PendingTransactionConnection';
  edges?: Maybe<Array<PendingTransactionEdge>>;
  pageInfo: PageInfo;
};

export type PendingTransactionEdge = {
  __typename?: 'PendingTransactionEdge';
  cursor: Scalars['Cursor']['output'];
  node: PendingTransaction;
};

export type PendingTransactionFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
};

/** The root type in the Stitch API for GraphQL queries. */
export type Query = {
  __typename?: 'Query';
  banks: Array<BankInfo>;
  /** The client field represents the root of any queries that require a client token. */
  client: Client;
  /** Standardized means of fetching entities that implement `Node` by id. */
  node?: Maybe<Node>;
  /** The transaction categories in a given category set. */
  transactionCategories: Array<TransactionCategory>;
  /** The user field represents the root of any queries that require that the token is attached to a user account. */
  user: User;
};


/** The root type in the Stitch API for GraphQL queries. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root type in the Stitch API for GraphQL queries. */
export type QueryTransactionCategoriesArgs = {
  categorySet: TransactionCategorySet;
};

/**
 * ReauthorizationRequired indicates that user should be redirected to the userInteractionUrl, specifying the whitelisted `redirect_uri` as a paramater in the query string.
 *
 * Once the user has completed the required interaction, or has dismissed it, they'll be returned to the `redirect_uri`,
 * after which, the results of the reauthorization will be available using the following query:
 *
 * ```graphql
 *     query Result($requestId: ID!) {
 *         node(id: $requestId) {
 *             ... on ReauthorizationRequired {
 *                 status
 *                 userInteractionUrl
 *                 id
 *             }
 *         }
 *     }
 * ```
 */
export type ReauthorizationRequired = Node & {
  __typename?: 'ReauthorizationRequired';
  id: Scalars['ID']['output'];
  status: ReauthorizationStatus;
  userInteractionUrl: Scalars['URL']['output'];
};

/** The status of reauthorization for a user. */
export enum ReauthorizationStatus {
  /** Reauthorization succeeded. */
  Complete = 'complete',
  /** Reauthorization failed. */
  Failed = 'failed',
  /** Reauthorization hasn't finished yet. */
  Pending = 'pending'
}

export type RecurringPaymentConsentCancelled = {
  __typename?: 'RecurringPaymentConsentCancelled';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentDetails = CardConsentDetails | DebicheckConsentDetails;

export type RecurringPaymentConsentExpired = {
  __typename?: 'RecurringPaymentConsentExpired';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentGranted = {
  __typename?: 'RecurringPaymentConsentGranted';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentPending = {
  __typename?: 'RecurringPaymentConsentPending';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentProcessing = {
  __typename?: 'RecurringPaymentConsentProcessing';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentRequest = Node & {
  __typename?: 'RecurringPaymentConsentRequest';
  /** NOTE: nullable as long as we're in the "PENDING" state */
  consentDetails?: Maybe<RecurringPaymentConsentDetails>;
  id: Scalars['ID']['output'];
  nonce: Scalars['String']['output'];
  paymentMethodOptions: Array<Maybe<RecurringPaymentMethodOptions>>;
  status: RecurringPaymentConsentStatus;
  url: Scalars['String']['output'];
};

export type RecurringPaymentConsentRevoked = {
  __typename?: 'RecurringPaymentConsentRevoked';
  date: Scalars['Date']['output'];
};

export type RecurringPaymentConsentStatus = RecurringPaymentConsentCancelled | RecurringPaymentConsentExpired | RecurringPaymentConsentGranted | RecurringPaymentConsentPending | RecurringPaymentConsentProcessing | RecurringPaymentConsentRevoked;

export type RecurringPaymentMethodOptions = CardRecurringPaymentMethodOptions | DebicheckRecurringPaymentMethodOptions;

/** Details relating to a consent request. */
export type RecurringPaymentMethodsInput = {
  card?: InputMaybe<CardPaymentMethodInput>;
  debicheck?: InputMaybe<DebicheckRecurringPaymentMethodInput>;
};

export enum RecurringPaymentScenario {
  DelayedCharge = 'DelayedCharge',
  Installment = 'Installment',
  NoShow = 'NoShow',
  PartialShipment = 'PartialShipment',
  Resubmission = 'Resubmission',
  StandingOrder = 'StandingOrder',
  Subscription = 'Subscription',
  Unscheduled = 'Unscheduled'
}

export type RedactedCardInput = {
  redactedCardNumber: Scalars['String']['input'];
  redactedSecurityCode: Scalars['String']['input'];
};

export type Refund = Node & {
  __typename?: 'Refund';
  amount: Scalars['Money']['output'];
  /** The reference that will be displayed on the refunded users statement */
  beneficiaryReference: Scalars['String']['output'];
  created: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  nonce: Scalars['String']['output'];
  paymentInitiation?: Maybe<PaymentInitiation>;
  paymentInitiationRequest?: Maybe<PaymentInitiationRequest>;
  reason: RefundReason;
  status: RefundStatus;
};

/** Bank has successfully processed the refund */
export type RefundCompleted = {
  __typename?: 'RefundCompleted';
  date: Scalars['Date']['output'];
  expectedSettlement: Scalars['Date']['output'];
};

export type RefundCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  expectedSettlement?: InputMaybe<DateFilterInput>;
};

export type RefundConnection = {
  __typename?: 'RefundConnection';
  edges?: Maybe<Array<RefundEdge>>;
  pageInfo: PageInfo;
};

export type RefundEdge = {
  __typename?: 'RefundEdge';
  cursor: Scalars['Cursor']['output'];
  node: Refund;
};

/** Refund has failed to complete */
export type RefundError = {
  __typename?: 'RefundError';
  date: Scalars['Date']['output'];
  reason: RefundErrorReason;
};

export type RefundErrorFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  reason?: InputMaybe<RefundErrorReasonFilterInput>;
};

export enum RefundErrorReason {
  /** There was a problem communicating with the processing bank. */
  BankError = 'bank_error',
  /** An internal error occurred inside the bank while trying to process the transaction. */
  BankProcessingError = 'bank_processing_error',
  /**
   * The recipient bank did not accept the transaction.
   * Common causes are the beneficiary bank not responding to an RTC payment within the required 60 seconds, or not being enrolled for RTC.
   */
  BeneficiaryBankProcessingError = 'beneficiary_bank_processing_error',
  /** A limit was exceeded. */
  ExceededLimit = 'exceeded_limit',
  /** The account is inactive. This can be remedied by reactivating it. */
  InactiveAccount = 'inactive_account',
  /** The account from which the disbursement was to be made had insufficient_funds for longer than the allowed duration */
  InsufficientFunds = 'insufficient_funds',
  /**
   * (Deprecated) An unknown error has occurred processing the disbursement into the provided beneficiary account.
   * @deprecated No longer supported
   */
  InternalError = 'internal_error',
  /** The account was not found. It may have been closed or cannot process this type of transaction. */
  InvalidAccount = 'invalid_account',
  /**
   * (Deprecated) The provided beneficiary account is invalid.
   * @deprecated No longer supported
   */
  InvalidDestination = 'invalid_destination',
  /** The details (e.g. account number or branch code) were rejected by the bank. */
  InvalidTransactionDetails = 'invalid_transaction_details',
  /** The payment associated with the refund has not been received yet */
  PaymentNotReceived = 'payment_not_received',
  /** There was a restriction on the account. This could be anything from FICA compliance to the account being manually frozen. */
  RestrictedAccount = 'restricted_account'
}

export type RefundErrorReasonFilterInput = {
  eq?: InputMaybe<RefundErrorReason>;
  gt?: InputMaybe<RefundErrorReason>;
  gte?: InputMaybe<RefundErrorReason>;
  in?: InputMaybe<Array<InputMaybe<RefundErrorReason>>>;
  lt?: InputMaybe<RefundErrorReason>;
  lte?: InputMaybe<RefundErrorReason>;
  ne?: InputMaybe<RefundErrorReason>;
  nin?: InputMaybe<Array<InputMaybe<RefundErrorReason>>>;
};

export type RefundFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  beneficiaryReference?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  nonce?: InputMaybe<StringFilterInput>;
  paymentInitiation?: InputMaybe<PaymentInitiationFilterInput>;
  paymentInitiationRequest?: InputMaybe<PaymentInitiationRequestFilterInput>;
  reason?: InputMaybe<RefundReasonFilterInput>;
  status?: InputMaybe<RefundStatusFilterInput>;
};

export type RefundFilterListInput = {
  any?: InputMaybe<RefundFilterInput>;
  every?: InputMaybe<RefundFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

export type RefundInitiatePayload = {
  __typename?: 'RefundInitiatePayload';
  refund: Refund;
};

export type RefundInput = {
  amount: MoneyInput;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  nonce: Scalars['String']['input'];
  reason: RefundReason;
};

/** The refund has been paused */
export type RefundPaused = {
  __typename?: 'RefundPaused';
  date: Scalars['Date']['output'];
  reason: RefundPausedReason;
};

export type RefundPausedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  reason?: InputMaybe<RefundPausedReasonFilterInput>;
};

/** Why the refund has not been paid out yet. */
export enum RefundPausedReason {
  /** The user does not have the necessary funds in their account to complete the request */
  InsufficientFunds = 'insufficient_funds'
}

export type RefundPausedReasonFilterInput = {
  eq?: InputMaybe<RefundPausedReason>;
  gt?: InputMaybe<RefundPausedReason>;
  gte?: InputMaybe<RefundPausedReason>;
  in?: InputMaybe<Array<InputMaybe<RefundPausedReason>>>;
  lt?: InputMaybe<RefundPausedReason>;
  lte?: InputMaybe<RefundPausedReason>;
  ne?: InputMaybe<RefundPausedReason>;
  nin?: InputMaybe<Array<InputMaybe<RefundPausedReason>>>;
};

/** The refund has been accepted and is awaiting processing */
export type RefundPending = {
  __typename?: 'RefundPending';
  date: Scalars['Date']['output'];
};

export type RefundPendingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export enum RefundReason {
  Duplicate = 'duplicate',
  Fraudulent = 'fraudulent',
  RequestedByUser = 'requested_by_user'
}

export type RefundReasonFilterInput = {
  eq?: InputMaybe<RefundReason>;
  gt?: InputMaybe<RefundReason>;
  gte?: InputMaybe<RefundReason>;
  in?: InputMaybe<Array<InputMaybe<RefundReason>>>;
  lt?: InputMaybe<RefundReason>;
  lte?: InputMaybe<RefundReason>;
  ne?: InputMaybe<RefundReason>;
  nin?: InputMaybe<Array<InputMaybe<RefundReason>>>;
};

export type RefundStatus = RefundCompleted | RefundError | RefundPaused | RefundPending | RefundSubmitted;

export type RefundStatusFilterInput = {
  RefundCompleted?: InputMaybe<RefundCompletedFilterInput>;
  RefundError?: InputMaybe<RefundErrorFilterInput>;
  RefundPaused?: InputMaybe<RefundPausedFilterInput>;
  RefundPending?: InputMaybe<RefundPendingFilterInput>;
  RefundSubmitted?: InputMaybe<RefundSubmittedFilterInput>;
  typename?: InputMaybe<RefundStatusUnionFilterDisciminatorFilterInput>;
};

export enum RefundStatusUnionFilterDisciminator {
  RefundCompleted = 'RefundCompleted',
  RefundError = 'RefundError',
  RefundPaused = 'RefundPaused',
  RefundPending = 'RefundPending',
  RefundSubmitted = 'RefundSubmitted'
}

export type RefundStatusUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  gt?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  gte?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<RefundStatusUnionFilterDisciminator>>>;
  lt?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  lte?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  ne?: InputMaybe<RefundStatusUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<RefundStatusUnionFilterDisciminator>>>;
};

/** The refund has been submitted to bank */
export type RefundSubmitted = {
  __typename?: 'RefundSubmitted';
  date: Scalars['Date']['output'];
};

export type RefundSubmittedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type RefundSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'RefundSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: Refund;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type RefundTransactionInitiateInput = {
  originalPaymentId: Scalars['ID']['input'];
  refundInput: RefundInput;
};

export type RefundWebhookSubscription = WebhookSubscription & {
  __typename?: 'RefundWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

export type RemovePayoutBatchPayoutsInput = {
  batchId: Scalars['ID']['input'];
  /** Remove disbursements from a batch based on their IDs */
  disbursementIds: Array<Scalars['ID']['input']>;
};

export type RemovePayoutBatchPayoutsPayload = {
  __typename?: 'RemovePayoutBatchPayoutsPayload';
  removedPayoutIds: Array<Maybe<Scalars['ID']['output']>>;
};

export type Salary = {
  __typename?: 'Salary';
  /** A number between 0-1.0 representing the confidence that the transactions that make up this salary correlate and that this is a reliable source of income */
  confidence: Scalars['Decimal']['output'];
  /** How often the user is paid this salary. To start off with, only a monthly cadence is supported */
  frequency: SalaryFrequency;
  /** When we [expect](https://en.wikipedia.org/wiki/Expected_value) this user to next be paid */
  nextSalaryPaymentExpectedDate: Scalars['Date']['output'];
  /** The observed [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of `nextSalaryPaymentExpectedDate` in days. */
  nextSalaryPaymentStandardDeviationInDays: Scalars['Decimal']['output'];
  /** When this user was last paid this salary */
  previousSalaryPaymentDate: Scalars['Date']['output'];
  /** The [expected](https://en.wikipedia.org/wiki/Expected_value) amount of the next salary payment */
  salaryExpected: Scalars['Money']['output'];
  /** The observed [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of the salary */
  salaryStandardDeviation: Scalars['Money']['output'];
  /** The observed transactions that may be correlated with this salary */
  transactions: SalaryTransactionConnection;
};


export type SalaryTransactionsArgs = {
  filter?: InputMaybe<TransactionFilterInput>;
};

export type SalaryConnection = {
  __typename?: 'SalaryConnection';
  edges: Array<SalaryEdge>;
  pageInfo: PageInfo;
};

export type SalaryEdge = {
  __typename?: 'SalaryEdge';
  cursor: Scalars['Cursor']['output'];
  node: Salary;
};

export type SalaryFilterInput = {
  confidence?: InputMaybe<DecimalFilterInput>;
  frequency?: InputMaybe<SalaryFrequencyFilterInput>;
  nextSalaryPaymentExpectedDate?: InputMaybe<DateFilterInput>;
  nextSalaryPaymentStandardDeviationInDays?: InputMaybe<DecimalFilterInput>;
  previousSalaryPaymentDate?: InputMaybe<DateFilterInput>;
  salaryExpected?: InputMaybe<MoneyFilterInput>;
  salaryStandardDeviation?: InputMaybe<MoneyFilterInput>;
};

/** How often the user is paid this salary */
export enum SalaryFrequency {
  /** The user is paid once every two weeks. */
  Fortnightly = 'fortnightly',
  /** The user is paid once a month. */
  Monthly = 'monthly',
  /** The user is paid once a week. */
  Weekly = 'weekly'
}

export type SalaryFrequencyFilterInput = {
  eq?: InputMaybe<SalaryFrequency>;
  gt?: InputMaybe<SalaryFrequency>;
  gte?: InputMaybe<SalaryFrequency>;
  in?: InputMaybe<Array<InputMaybe<SalaryFrequency>>>;
  lt?: InputMaybe<SalaryFrequency>;
  lte?: InputMaybe<SalaryFrequency>;
  ne?: InputMaybe<SalaryFrequency>;
  nin?: InputMaybe<Array<InputMaybe<SalaryFrequency>>>;
};

export type SalaryTransactionConnection = {
  __typename?: 'SalaryTransactionConnection';
  edges: Array<SalaryTransactionEdge>;
  /** Maximum salary payment amount this user was paid for this salary */
  maxAmount: Scalars['Money']['output'];
  /** A transaction representing the median amount this user was paid for this salary */
  medianSalary: Transaction;
  /** Minimum salary payment this user was paid for this salary */
  minAmount: Scalars['Money']['output'];
  pageInfo: PageInfo;
};

export type SalaryTransactionEdge = {
  __typename?: 'SalaryTransactionEdge';
  cursor: Scalars['Cursor']['output'];
  node: Transaction;
};

/** The user elects to use a saved card */
export type SavedCardSelected = PaymentInitiationRequestEvent & {
  __typename?: 'SavedCardSelected';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** The kinds of permissions a user can grant on a token. */
export enum Scope {
  /** Allows the lookup of account holder information for bank accounts. */
  Accountholders = 'accountholders',
  /** Allows the listing of bank accounts. */
  Accounts = 'accounts',
  /** Allows the querying of bank account balances. */
  Balances = 'balances',
  /** Allows the retrieval of user bank account statements. */
  Bankstatements = 'bankstatements',
  /** Allows the submission of bank account verification requests. */
  ClientBankaccountverification = 'client_bankaccountverification',
  /** Allows the lookup of business registration information. */
  ClientBusinesslookup = 'client_businesslookup',
  /** Allows the submission of bank account CDV requests */
  ClientCdv = 'client_cdv',
  /** Allows the creation of a client disbursement */
  ClientDisbursement = 'client_disbursement',
  /** Allows the uploading of client images. */
  ClientImageupload = 'client_imageupload',
  /** Allows the creation and retrieval of payment authorizations. */
  ClientPaymentauthorizationrequest = 'client_paymentauthorizationrequest',
  /** Allows the creation and retrieval of payment requests. */
  ClientPaymentrequest = 'client_paymentrequest',
  /** Allows the creation of a recurring payment consent request */
  ClientRecurringpaymentconsentrequest = 'client_recurringpaymentconsentrequest',
  /** Allows the initiation of a refund on a payment */
  ClientRefund = 'client_refund',
  /** Allows for the identification of the request as an OIDC request */
  Openid = 'openid',
  /** Allows the creation of user constrained payment requests. */
  Paymentinitiationrequest = 'paymentinitiationrequest',
  /** Allows the lookup of unmasked bank account number. */
  PciUnsafe = 'pci_unsafe',
  /** Allows the creation of a client for a tenant */
  TenantClientcreate = 'tenant_clientcreate',
  /** Allows the creation of payment requests for a tenant */
  TenantPaymentrequestcreate = 'tenant_paymentrequestcreate',
  /** Allows the creation of subscriptions for a tenant */
  TenantSubscriptioncreate = 'tenant_subscriptioncreate',
  /** Allows the querying of transactions for bank accounts. */
  Transactions = 'transactions'
}

export type ScopeFilterInput = {
  eq?: InputMaybe<Scope>;
  in?: InputMaybe<Array<InputMaybe<Scope>>>;
  ne?: InputMaybe<Scope>;
  nin?: InputMaybe<Array<InputMaybe<Scope>>>;
};

export type ScopeFilterListInput = {
  any?: InputMaybe<ScopeFilterInput>;
  every?: InputMaybe<ScopeFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

/** Secure3d is completed */
export type Secure3dCompleted = PaymentInitiationRequestEvent & {
  __typename?: 'Secure3dCompleted';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

/** Secure3d is required and initiated */
export type Secure3dInitiated = PaymentInitiationRequestEvent & {
  __typename?: 'Secure3dInitiated';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type Settlement = Node & {
  __typename?: 'Settlement';
  /** The amount paid to the destination */
  amount: Scalars['Money']['output'];
  /** The destination of the settlement */
  destination: Beneficiary;
  /** The direct deposits that are included in this settlement */
  directDeposits: DirectDepositConnection;
  id: Scalars['ID']['output'];
  /** The payment initiation requests that are included in this settlement */
  paymentInitiationRequests: PaymentInitiationRequestConnection;
  /** The payment initiations that are included in this settlement */
  paymentInitiations: PaymentInitiationConnection;
  /** The destination reference */
  reference: Scalars['String']['output'];
  status: SettlementStatus;
  /** Transactions that are included in this settlement */
  transactions: PaymentTransactionConnection;
};


export type SettlementDirectDepositsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


export type SettlementPaymentInitiationRequestsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


export type SettlementPaymentInitiationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};


export type SettlementTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['UInt']['input']>;
  last?: InputMaybe<Scalars['UInt']['input']>;
};

/** The settlement has been submitted to the bank, and confirmation of completion has been received. */
export type SettlementCompleted = {
  __typename?: 'SettlementCompleted';
  date: Scalars['Date']['output'];
  expectedSettlement: Scalars['Date']['output'];
};

export type SettlementCompletedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  expectedSettlement?: InputMaybe<DateFilterInput>;
};

export type SettlementConnection = {
  __typename?: 'SettlementConnection';
  edges: Array<SettlementEdge>;
  pageInfo: PageInfo;
};

export type SettlementEdge = {
  __typename?: 'SettlementEdge';
  cursor: Scalars['Cursor']['output'];
  node: Settlement;
};

/** Failed to pay settlement into destination account */
export type SettlementFailed = {
  __typename?: 'SettlementFailed';
  date: Scalars['Date']['output'];
  settlementFailedReason: Scalars['String']['output'];
};

export type SettlementFailedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  settlementFailedReason?: InputMaybe<StringFilterInput>;
};

export type SettlementFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  destination?: InputMaybe<BeneficiaryFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<SettlementStatusFilterInput>;
};

/** Payment has been completed by the user, but the settlement has not yet been submitted. */
export type SettlementPending = {
  __typename?: 'SettlementPending';
  date: Scalars['Date']['output'];
  settlementPendingReason: Scalars['String']['output'];
};

export type SettlementPendingFilterInput = {
  date?: InputMaybe<DateFilterInput>;
  settlementPendingReason?: InputMaybe<StringFilterInput>;
};

export type SettlementStatus = SettlementCompleted | SettlementFailed | SettlementPending | SettlementSubmitted;

export type SettlementStatusFilterInput = {
  SettlementCompleted?: InputMaybe<SettlementCompletedFilterInput>;
  SettlementFailed?: InputMaybe<SettlementFailedFilterInput>;
  SettlementPending?: InputMaybe<SettlementPendingFilterInput>;
  SettlementSubmitted?: InputMaybe<SettlementSubmittedFilterInput>;
  typename?: InputMaybe<SettlementStatusUnionFilterDisciminatorFilterInput>;
};

export enum SettlementStatusUnionFilterDisciminator {
  SettlementCompleted = 'SettlementCompleted',
  SettlementFailed = 'SettlementFailed',
  SettlementPending = 'SettlementPending',
  SettlementSubmitted = 'SettlementSubmitted'
}

export type SettlementStatusUnionFilterDisciminatorFilterInput = {
  eq?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  gt?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  gte?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  in?: InputMaybe<Array<InputMaybe<SettlementStatusUnionFilterDisciminator>>>;
  lt?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  lte?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  ne?: InputMaybe<SettlementStatusUnionFilterDisciminator>;
  nin?: InputMaybe<Array<InputMaybe<SettlementStatusUnionFilterDisciminator>>>;
};

/** The settlement has been submitted to the bank, but confirmation of completion has not been received yet. */
export type SettlementSubmitted = {
  __typename?: 'SettlementSubmitted';
  date: Scalars['Date']['output'];
};

export type SettlementSubmittedFilterInput = {
  date?: InputMaybe<DateFilterInput>;
};

export type SettlementSubscriptionEventEdge = SubscriptionEventEdge & {
  __typename?: 'SettlementSubscriptionEventEdge';
  eventId: Scalars['ID']['output'];
  node: Settlement;
  subscriptionId: Scalars['ID']['output'];
  time: Scalars['Date']['output'];
};

export type SettlementWebhookSubscription = WebhookSubscription & {
  __typename?: 'SettlementWebhookSubscription';
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

export type SimulatePaymentMethodInput = {
  completed: SimulatedCompletedPaymentMethod;
};

export enum SimulatedCompletedPaymentMethod {
  CashAtm = 'cash_atm',
  /** Simulate completed cashpay payment request */
  CashRetailer = 'cash_retailer',
  Crypto = 'crypto',
  EftManual = 'eft_manual'
}

/** Authorization mechanism for simulating reauthorization of a test user. */
export enum SimulatedReauthorizationType {
  /** Reauthorize the test user with an OTP. */
  Otp = 'otp'
}

export type StringFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitBatchInput = {
  batchId: Scalars['ID']['input'];
};

export type SubmitBatchPayload = {
  __typename?: 'SubmitBatchPayload';
  /** Will be true if the batch is successfully submitted for processing. */
  success: Scalars['Boolean']['output'];
};

/** Root type for GraphQL Subscriptions */
export type Subscription = {
  __typename?: 'Subscription';
  /** Add client a subscription */
  client?: Maybe<ClientSubscription>;
};


/** Root type for GraphQL Subscriptions */
export type SubscriptionClientArgs = {
  webhook: SubscriptionWebhookInput;
};

export type SubscriptionEventEdge = {
  /** Unique identifier for this event. Used primarily for the purposes of disambiguating duplicate events */
  eventId: Scalars['ID']['output'];
  /** Identifier for the subscription. Can be used to unsubscribe */
  subscriptionId: Scalars['ID']['output'];
  /** Time at which this event was spawned */
  time: Scalars['Date']['output'];
};

export enum SubscriptionStatus {
  Active = 'active',
  Unsubscribed = 'unsubscribed'
}

export type SubscriptionSubscription = Node & {
  __typename?: 'SubscriptionSubscription';
  created: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  status?: Maybe<SubscriptionStatus>;
};

export type SubscriptionUnsubscribeInput = {
  /** The subscription ID */
  id: Scalars['ID']['input'];
};

export type SubscriptionWebhookInput = {
  /** An optional list of headers to be included with the POST request. */
  headers?: InputMaybe<Array<InputHeader>>;
  /** An optional secret used to sign the webhook payload */
  secret?: InputMaybe<SubscriptionWebhookSecret>;
  /** A URL where the subscription data will be POSTed to. Note that due to the sensitive nature of the data, all URLs must use HTTPS */
  url: Scalars['URL']['input'];
};

export type SubscriptionWebhookSecret = {
  hmacSha256Key?: InputMaybe<Scalars['String']['input']>;
};

export type TemporaryResidence = {
  __typename?: 'TemporaryResidence';
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

/**
 * Unique identifier details for a natural person. The temporary residence number is unique
 * for the given country.
 */
export type TemporaryResidenceDetails = {
  __typename?: 'TemporaryResidenceDetails';
  /** The country from which this temporary residence is issued. */
  country: Scalars['CountryCode']['output'];
  number: Scalars['String']['output'];
};

export type TemporaryResidenceDetailsFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

export type TemporaryResidenceFilterInput = {
  country?: InputMaybe<CountryCodeFilterInput>;
  number?: InputMaybe<StringFilterInput>;
};

/** new type */
export type TemporaryResidenceIdInput = {
  country: Scalars['CountryCode']['input'];
  number: Scalars['String']['input'];
};

export type TenantClient = {
  __typename?: 'TenantClient';
  absoluteRefreshTokenLifetime: Scalars['Int']['output'];
  accessTokenLifetime: Scalars['Int']['output'];
  /** set of allowed grant types. */
  allowedGrantTypes: Array<Scalars['String']['output']>;
  /** The scopes the client will be restricted to. */
  allowedScopes: Array<Scope>;
  authorizationCodeLifetime: Scalars['Int']['output'];
  /** The countries that are enabled for the client. */
  countryCodes: Array<Scalars['CountryCode']['output']>;
  environment: Environment;
  id: Scalars['ID']['output'];
  identityTokenLifetime: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** A set of allowlisted redirect urls. */
  redirectUrls: Array<Scalars['LenientURL']['output']>;
  refreshTokenUsage: Scalars['Int']['output'];
  slidingRefreshTokenLifetime: Scalars['Int']['output'];
  /** The url from which the client will be used. */
  url: Scalars['LenientURL']['output'];
};

/** Details required to create a client belonging to a tenant. */
export type TenantClientCreateInput = {
  allowedScopes: Array<Scope>;
  countryCodes: Array<Scalars['CountryCode']['input']>;
  environment: Environment;
  name: Scalars['String']['input'];
  redirectUrls: Array<Scalars['LenientURL']['input']>;
  url: Scalars['LenientURL']['input'];
};

/**
 * A new tenant client and it's associated secret
 *
 * This type requires the following scope:
 *
 * `[tenant_clientcreate]`
 */
export type TenantClientCreatePayload = {
  __typename?: 'TenantClientCreatePayload';
  client: TenantClient;
  secret: TenantClientSecret;
};

export type TenantClientSecret = {
  __typename?: 'TenantClientSecret';
  description: Scalars['String']['output'];
  expiration: Scalars['Date']['output'];
  secretValue: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** Details required to allow test clients to add directDeposits */
export type TestClientCreateDirectDepositInput = {
  amount: MoneyInput;
  paymentMethod?: InputMaybe<PaymentMethod>;
  reference: Scalars['String']['input'];
};

/** The reference of the directDeposit which was added */
export type TestClientCreateDirectDepositPayload = {
  __typename?: 'TestClientCreateDirectDepositPayload';
  paymentMethod?: Maybe<PaymentMethod>;
  reference: Scalars['String']['output'];
};

/** Details required to allow test clients to add paymentConfirmations. */
export type TestClientCreatePaymentConfirmationInput = {
  paymentRequestId: Scalars['ID']['input'];
};

/** The ID of the payment request for which a paymentConfirmation was added */
export type TestClientCreatePaymentConfirmationPayload = {
  __typename?: 'TestClientCreatePaymentConfirmationPayload';
  paymentRequestId: Scalars['ID']['output'];
};

/** The payment request that will be marked as completed */
export type TestClientPaymentInitiationRequestSimulateCompleteInput = {
  paymentMethods: SimulatePaymentMethodInput;
  paymentRequestId: Scalars['ID']['input'];
};

/** The payment request id of the completed payment request */
export type TestClientPaymentInitiationRequestSimulateCompletePayload = {
  __typename?: 'TestClientPaymentInitiationRequestSimulateCompletePayload';
  paymentRequestId: Scalars['ID']['output'];
};

/** Result of simulating a bank reauthorization request for a test user. */
export type TestUserTriggerSimulatedReauthorizationPayload = {
  __typename?: 'TestUserTriggerSimulatedReauthorizationPayload';
  /** If the simulatedReauthorizationType is otp, this field will contain the code needed to complete the reauthorization challenge */
  otp?: Maybe<Scalars['String']['output']>;
  simulatedReauthorizationType: SimulatedReauthorizationType;
};

/**
 * A transfer of money from one account to another.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type Transaction = Node & {
  __typename?: 'Transaction';
  /**
   * Positive values represent an inflow into the account. Conversely negative values represent
   * money leaving the account.
   */
  amount: Scalars['Money']['output'];
  /** The bank account in which the transaction occurred */
  bankAccount: BankAccount;
  /**
   * A list of possible categorizations and their associated probabilities
   * @deprecated No longer supported
   */
  categories: Array<Maybe<TransactionCategorization>>;
  /**
   * The category of the transaction and its associated probability
   * @deprecated No longer supported
   */
  category?: Maybe<TransactionCategorization>;
  /**
   * The date at which the transaction occurred.
   * The granularity of the transaction date will largely be
   * at the day level, however if a given bank has more accurate
   * times available, this will be included in the transaction date.
   */
  date: Scalars['Date']['output'];
  /** The description of the transaction as it appears in the user's statement */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The reference (if available) as it appears on the counterparty's statement */
  reference?: Maybe<Scalars['String']['output']>;
  /** Remaining balance after this transaction is applied to the account */
  runningBalance?: Maybe<Scalars['Money']['output']>;
};


/**
 * A transfer of money from one account to another.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type TransactionCategoriesArgs = {
  categorySet?: InputMaybe<TransactionCategorySet>;
  first?: InputMaybe<Scalars['UInt']['input']>;
};


/**
 * A transfer of money from one account to another.
 *
 * This type requires the following scope:
 *
 * `[transactions]`
 */
export type TransactionCategoryArgs = {
  categorySet?: InputMaybe<TransactionCategorySet>;
};

/**
 * A label that describes a transaction. Comes with the probability of the
 * label being relevant to the transaction.
 */
export type TransactionCategorization = {
  __typename?: 'TransactionCategorization';
  categoryId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  /** A value between 0 and 1 indicating the accuracy of the categorization */
  probability: Scalars['Decimal']['output'];
};

export type TransactionCategorizationFilterInput = {
  categoryId?: InputMaybe<IdFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  probability?: InputMaybe<DecimalFilterInput>;
};

export type TransactionCategorizationFilterListInput = {
  any?: InputMaybe<TransactionCategorizationFilterInput>;
  every?: InputMaybe<TransactionCategorizationFilterInput>;
  length?: InputMaybe<UIntFilterInput>;
};

/**
 * A description that indicates the purpose of a transaction. Used to group
 * related transactions. Unlike TransactionCategorization, this doesn't come
 * with the probability that the description is relevant to any given
 * transaction. Can be refetched, per the [Relay server
 * spec](https://relay.dev/docs/en/graphql-server-specification.html).
 */
export type TransactionCategory = Node & {
  __typename?: 'TransactionCategory';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

/** The different kinds of descriptions for transactions. */
export enum TransactionCategorySet {
  /** Covers consumer centric, day-to-day banking categories */
  Consumer = 'consumer'
}

export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  edges?: Maybe<Array<TransactionEdge>>;
  pageInfo: PageInfo;
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: Scalars['Cursor']['output'];
  node: Transaction;
};

export type TransactionFailure = {
  __typename?: 'TransactionFailure';
  date: Scalars['Date']['output'];
  reason: TransactionStateReason;
};

export type TransactionFilterInput = {
  amount?: InputMaybe<MoneyFilterInput>;
  bankAccount?: InputMaybe<BankAccountFilterInput>;
  categories?: InputMaybe<TransactionCategorizationFilterListInput>;
  category?: InputMaybe<TransactionCategorizationFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  reference?: InputMaybe<StringFilterInput>;
  runningBalance?: InputMaybe<MoneyFilterInput>;
};

export type TransactionInitiateInput = {
  amount: MoneyInput;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  nonce: Scalars['String']['input'];
  paymentMethods?: InputMaybe<PaymentMethodsTransactionInput>;
  paymentRequestId?: InputMaybe<Scalars['ID']['input']>;
  /** Exactly one of the two fields below must be submitted */
  token?: InputMaybe<Scalars['ID']['input']>;
};

/** The transaction is paused. It will continue when outstanding user interactions are completed. */
export type TransactionPending = {
  __typename?: 'TransactionPending';
  date: Scalars['Date']['output'];
  reason: TransactionStateReason;
};

export type TransactionState = TransactionFailure | TransactionPending | TransactionSuccess;

/**
 * Notes for adding to these error types:
 * This error reason is surfaced to the client via the API so only add messages that are appropriate for the client.
 * If the error requires a custom error message to be displayed to the user then the error message
 * can be added to cardPaymentErrorMessages in the Reuben vault values.
 */
export enum TransactionStateReason {
  AuthenticationError = 'authenticationError',
  AuthorizationFailed = 'authorizationFailed',
  AuthorizationNotFinalised = 'authorizationNotFinalised',
  BelowOriginalAmount = 'belowOriginalAmount',
  CapitecAppNotFound = 'capitecAppNotFound',
  CapitecClientBlockedMerchant = 'capitecClientBlockedMerchant',
  CapitecClientDeactivated = 'capitecClientDeactivated',
  CapitecClientNotFound = 'capitecClientNotFound',
  CapitecConsentRequestDeclined = 'capitecConsentRequestDeclined',
  CapitecConsentRequestFailed = 'capitecConsentRequestFailed',
  CapitecConsentRequestTimedOut = 'capitecConsentRequestTimedOut',
  CapitecDuplicatePayment = 'capitecDuplicatePayment',
  CapitecMaxTransactionLimitExceeded = 'capitecMaxTransactionLimitExceeded',
  CapitecMerchantNotFound = 'capitecMerchantNotFound',
  CapitecTransactionLimitExceeded = 'capitecTransactionLimitExceeded',
  ClientNotFound = 'clientNotFound',
  ExceedsOriginalAmount = 'exceedsOriginalAmount',
  GetTokenError = 'getTokenError',
  InsufficientFunds = 'insufficientFunds',
  InternalServerError = 'internalServerError',
  InvalidCardError = 'invalidCardError',
  InvalidConfigurationError = 'invalidConfigurationError',
  InvalidConsentRequest = 'invalidConsentRequest',
  InvalidInputError = 'invalidInputError',
  InvalidPaymentRequest = 'invalidPaymentRequest',
  InvalidTransactionError = 'invalidTransactionError',
  InvalidTransactionStatusError = 'invalidTransactionStatusError',
  PaymentRefundFailed = 'paymentRefundFailed',
  PaymentRequestInInvalidState = 'paymentRequestInInvalidState',
  Secure3dDeclined = 'secure3dDeclined',
  Secure3dLookupFailed = 'secure3dLookupFailed',
  Secure3dNotCompleted = 'secure3dNotCompleted',
  TransactionAlreadySucceeded = 'transactionAlreadySucceeded',
  TransactionDisputed = 'transactionDisputed',
  TransactionExistsError = 'transactionExistsError',
  UnknownError = 'unknownError',
  WaitingFor3dSecure = 'waitingFor3dSecure',
  WaitingForCapitecConsentRequest = 'waitingForCapitecConsentRequest'
}

export type TransactionSuccess = {
  __typename?: 'TransactionSuccess';
  date: Scalars['Date']['output'];
};

export type UIntFilterInput = {
  eq?: InputMaybe<Scalars['UInt']['input']>;
  gt?: InputMaybe<Scalars['UInt']['input']>;
  gte?: InputMaybe<Scalars['UInt']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UInt']['input']>>>;
  lt?: InputMaybe<Scalars['UInt']['input']>;
  lte?: InputMaybe<Scalars['UInt']['input']>;
  ne?: InputMaybe<Scalars['UInt']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UInt']['input']>>>;
};

export type UrlFilterInput = {
  eq?: InputMaybe<Scalars['URL']['input']>;
  glob?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['URL']['input']>>>;
  ne?: InputMaybe<Scalars['URL']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['URL']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

/** An unkown error is caught */
export type UnkownPaymentError = PaymentInitiationRequestEvent & {
  __typename?: 'UnkownPaymentError';
  description: Scalars['String']['output'];
  occurred: Scalars['Date']['output'];
  paymentMethod?: Maybe<Scalars['String']['output']>;
};

export type UnsubscribePayload = {
  __typename?: 'UnsubscribePayload';
  status?: Maybe<SubscriptionStatus>;
  subscriptionId: Scalars['ID']['output'];
};

/** The root of any queries that require a user token. */
export type User = Node & {
  __typename?: 'User';
  /**
   * Returns the set of bank accounts that this token is authorized to access.
   *
   * This field returns *all* authorized accounts
   */
  bankAccounts: Array<BankAccount>;
  id: Scalars['ID']['output'];
  /**
   * Income is the set of transactions that increase a user's balance, excluding transactions such as inter-account transfers, and
   * other spurious transactions. To further refine the transactions that are considered income, you may use our [filtering](https://stitch.money/docs/stitch-api/filtering) syntax
   */
  income?: Maybe<IncomeConnection>;
  paymentAuthorization?: Maybe<PaymentAuthorization>;
  /**
   * A collection of different salaries the user may be earning.
   *
   * Note:
   * The initial version of this field uses a naive algorithm to determine salary values and only supports workers who
   * have a single source of income (i.e. if they're working two jobs, the two sources of income may not be clearly grouped)
   */
  salaries?: Maybe<SalaryConnection>;
  /** List of scopes granted by the user to this token */
  scopes: Array<Scope>;
};


/** The root of any queries that require a user token. */
export type UserBankAccountsArgs = {
  filter?: InputMaybe<BankAccountFilterInput>;
};


/** The root of any queries that require a user token. */
export type UserIncomeArgs = {
  filter?: InputMaybe<IncomeFilterInput>;
};


/** The root of any queries that require a user token. */
export type UserSalariesArgs = {
  filter?: InputMaybe<SalaryFilterInput>;
};


/** The root of any queries that require a user token. */
export type UserScopesArgs = {
  filter?: InputMaybe<ScopeFilterInput>;
};

/** The user and account that is allowed to initiate the payment. */
export type UserBankAccountPayerConstraints = {
  __typename?: 'UserBankAccountPayerConstraints';
  accountId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type UserBankAccountPayerConstraintsFilterInput = {
  accountId?: InputMaybe<IdFilterInput>;
  userId?: InputMaybe<IdFilterInput>;
};

export type UserDisbursementCreateInput = {
  /** The currency and quantity to be disbursed */
  amount: MoneyInput;
  /** The reference that will be displayed on the users statement */
  beneficiaryReference: Scalars['String']['input'];
  /** Affects how soon the disbursement will be paid out */
  disbursementType?: InputMaybe<DisbursementType>;
  /** Randomly generated unique string to ensure idempotency */
  nonce: Scalars['String']['input'];
  /** Details which identify the recipient of the disbursement. */
  recipientAccountHolder?: InputMaybe<DisbursementCreateRecipientAccountHolderDetailsInput>;
};

export type UserDisbursementCreatePayload = {
  __typename?: 'UserDisbursementCreatePayload';
  disbursement: Disbursement;
};

export type UserFilterInput = {
  bankAccounts?: InputMaybe<BankAccountFilterListInput>;
  id?: InputMaybe<IdFilterInput>;
  paymentAuthorization?: InputMaybe<PaymentAuthorizationFilterInput>;
  scopes?: InputMaybe<ScopeFilterListInput>;
};

/** Details required to initiate an authorized payment. */
export type UserInitiatePaymentInput = {
  amount: MoneyInput;
  /** Optional payment reference that will appear on the beneficiary's statement */
  beneficiaryReference?: InputMaybe<Scalars['String']['input']>;
  /** Optional Date (ISO 8061) input used to set an expiry on a payment */
  expireAt?: InputMaybe<Scalars['Date']['input']>;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** The name or unique identifier for the merchant */
  merchant?: InputMaybe<Scalars['String']['input']>;
  /** KYC information for the payer */
  payerInformation?: InputMaybe<PayerInformationInput>;
  /** Optional payment reference that will appear on the user's statement */
  payerReference?: InputMaybe<Scalars['String']['input']>;
};

/** Response from an initiated authorized payment. */
export type UserInitiatePaymentPayload = {
  __typename?: 'UserInitiatePaymentPayload';
  /** Details of the payment that has been initiated */
  paymentInitiation: PaymentInitiation;
};

/** The user that is allowed to initiate the payment. */
export type UserPayerConstraints = {
  __typename?: 'UserPayerConstraints';
  userId: Scalars['ID']['output'];
};

export type UserPayerConstraintsFilterInput = {
  userId?: InputMaybe<IdFilterInput>;
};

/**
 * The ID of the cancelled payment initiation request.
 *
 * This type requires the following scope:
 *
 * `[paymentinitiationrequest]`
 */
export type UserPaymentInitiationRequestCancelPayload = {
  __typename?: 'UserPaymentInitiationRequestCancelPayload';
  id: Scalars['ID']['output'];
};

export type UserPaymentInitiationRequestCreateBankAccountPayerConstraintInput = {
  /** The account that the user will be expected to pay from. Must be an account marked with the supportsPaymentInitiation flag */
  accountId: Scalars['ID']['input'];
};

export type UserPaymentInitiationRequestCreateInput = {
  amount: MoneyInput;
  /** The entity receiving the payment. */
  beneficiary: BeneficiaryInput;
  /** The payment reference that will appear on the beneficiary's statement. Must be 20 characters or less. */
  beneficiaryReference: Scalars['String']['input'];
  /** Optional Date (ISO 8061) input used to set an expiry on a payment */
  expireAt?: InputMaybe<Scalars['Date']['input']>;
  /** Optional reference field that will be present with the redirect query parameters when the payment is completed. */
  externalReference?: InputMaybe<Scalars['String']['input']>;
  /** The name or unique identifier for the merchant */
  merchant?: InputMaybe<Scalars['String']['input']>;
  /** Optional input used to further constrain which accounts may be used to initiate the payment */
  payerConstraint?: InputMaybe<UserPaymentInitiationRequestCreatePayerConstraintInput>;
  /** The payment reference that will appear on the payer's statement. Must be 12 characters or less. */
  payerReference: Scalars['String']['input'];
  /** Optional BankId used to restrict which bank a user may pay from. */
  restrictPayerBank?: InputMaybe<PayerBankId>;
};

/** One of the subfields in this type *must* be set */
export type UserPaymentInitiationRequestCreatePayerConstraintInput = {
  bankAccount?: InputMaybe<UserPaymentInitiationRequestCreateBankAccountPayerConstraintInput>;
};

/**
 * A newly created payment initiation request.
 *
 * This type requires the following scope:
 *
 * `[paymentinitiationrequest]`
 */
export type UserPaymentInitiationRequestCreatePayload = {
  __typename?: 'UserPaymentInitiationRequestCreatePayload';
  paymentInitiationRequest: PaymentInitiationRequest;
};

export type ValidateApplePayMerchantInput = {
  displayName: Scalars['String']['input'];
  initiative: Scalars['String']['input'];
  initiativeContext: Scalars['String']['input'];
  merchantIdentifier: Scalars['String']['input'];
  validationUrl: Scalars['String']['input'];
};

export type ValidateApplePayMerchantPayload = {
  __typename?: 'ValidateApplePayMerchantPayload';
  sessionData: Scalars['String']['output'];
};

/**
 * The outcome of a verification operation. The name of the property that contains this type will indicate what
 * verification was performed.
 */
export enum VerificationResult {
  /**
   * The data provided is *not* correct. It negatively correlates with the data provided by the verification system,
   * or the field itself is invalid or non-existent.
   */
  Refuted = 'refuted',
  /**
   * Verification could not be performed for the field. This could be because the information requested is not available
   * on the bank's system, the verification systems are unavailable or that it is not supported for the bank specified.
   */
  Unknown = 'unknown',
  /** The data provided was successfully verified against the bank data. */
  Verified = 'verified'
}

export type VerifiedAccountHolderBankAccountDetails = VerifiedBusinessBankAccountDetails | VerifiedIndividualBankAccountDetails;

/**
 * The fields in VerifiedBankAccountDetails will be set based on whether they can be correlated
 * with the account details provided. For example the account may exist, and the id number provided may
 * be valid, but if the ID number doesn't match the account details, the id will be omitted from these results.
 *
 * Note that it is not always possible to verify all offered fields, in which case these fields will also
 * appear as `null`.
 *
 * To determine whether a field is invalid, or simply was not able to be verified, please check the associated
 * verification result fields. These can take on the values `verified`, `unknown`, or `refuted`. Verification result
 * fields will be null if the associated field has not been specified.
 */
export type VerifiedBankAccountDetails = {
  __typename?: 'VerifiedBankAccountDetails';
  /**
   * Whether the account accepts credits.
   *
   * The value of this field `null` if the account cannot be verified.
   */
  accountAcceptsCredits?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether the account accepts debits.
   *
   * The value of this field `null` if the account cannot be verified.
   */
  accountAcceptsDebits?: Maybe<Scalars['Boolean']['output']>;
  accountHolder: VerifiedAccountHolderBankAccountDetails;
  /** Will be `null` if the account is invalid or cannot be verified */
  accountNumber?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the account is still open.
   *
   * The value of this field `null` if the account cannot be verified.
   */
  accountOpen?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Whether the account has been open for a period of greater than three months.
   *
   * The value of this field `null` if the account cannot be verified.
   */
  accountOpenForMoreThanThreeMonths?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Will be `null` if the account is invalid or cannot be verified, or if
   * the account type does not match that the account details provided.
   */
  accountType?: Maybe<AccountType>;
  /** Result of whether the account type matches the account details provided. */
  accountTypeVerificationResult?: Maybe<VerificationResult>;
  /** Aggregated result of whether the account exists as well as confirmation of the user's identity number and last name matching that of the account. */
  accountVerificationResult: VerificationResult;
  /** Will be `null` if the account is invalid or cannot be verified. */
  bankId?: Maybe<BankId>;
  /** Will be `null` if the account is invalid or cannot be verified */
  branchCode?: Maybe<Scalars['String']['output']>;
  /**
   * Detailed result of whether for the account exists as well as confirmation of the user's identity number, initials and last name
   * matching that of the account.
   */
  detailedAccountVerificationResults: DetailedAccountVerificationResults;
};

/** The verified details of a business that owns an account. */
export type VerifiedBusinessBankAccountDetails = {
  __typename?: 'VerifiedBusinessBankAccountDetails';
  /** The registered name of the business. For example `"STITCH MONEY PTY LTD"` */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The registration number of the business. Depending on the region and when
   * the business was registered, the format could be either a 10-digit number
   * with a letter prefix (eg. `"K1234123456"`), or the number format with
   * slashes (eg. YYYY/######/## or `"2020/518288/03"`)
   */
  registrationNumber?: Maybe<Scalars['String']['output']>;
};

/** The verified details of a natural person who owns an account. */
export type VerifiedIndividualBankAccountDetails = {
  __typename?: 'VerifiedIndividualBankAccountDetails';
  /** Surname(s) or last name(s) of the Individual. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters. */
  familyName?: Maybe<Scalars['String']['output']>;
  familyNameVerificationResult?: Maybe<VerificationResult>;
  /**
   * This value of this field is `null` if the identifying document cannot be positively correlated with the
   * account details provided.
   */
  identifyingDocument?: Maybe<IdentifyingDocument>;
  identifyingDocumentVerificationResult: VerificationResult;
  /**
   * Initials of the account holder. Initials are typically the capital letters that make up the accountholder's given name.
   * For example, if the accountholder's full name is Jonathan Paul Clegg, the initials would be 'JP'.
   */
  initials?: Maybe<Scalars['String']['output']>;
  initialsVerificationResult?: Maybe<VerificationResult>;
};

/** A list of accounts to be verified. */
export type VerifyAccountsCdvInput = {
  accounts: Array<InputMaybe<AccountCdvInput>>;
};

/** Response including a list of accounts with their CDV check results. */
export type VerifyAccountsCdvResults = {
  __typename?: 'VerifyAccountsCDVResults';
  accounts: Array<Maybe<AccountCdvResultPayload>>;
};

export type WebhookLoginResponse = {
  __typename?: 'WebhookLoginResponse';
  token?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
};

export type WebhookSubscription = {
  createdAt?: Maybe<Scalars['Date']['output']>;
  headers?: Maybe<Array<Header>>;
  hmacSha256Key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  query?: Maybe<Scalars['String']['output']>;
  url: Scalars['URL']['output'];
};

export type ListBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBanksQuery = { __typename?: 'Query', banks: Array<{ __typename?: 'BankInfo', country: any, name: string }> };


export const ListBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ListBanksQuery, ListBanksQueryVariables>;