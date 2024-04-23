export type SerializableNodeId = string;
export type AddressEntityTypeInput = SerializableNodeId;
export declare enum SerializableEntityType {
    GlobalPackage = "GlobalPackage",
    GlobalConsensusManager = "GlobalConsensusManager",
    GlobalValidator = "GlobalValidator",
    GlobalTransactionTracker = "GlobalTransactionTracker",
    GlobalGenericComponent = "GlobalGenericComponent",
    GlobalAccount = "GlobalAccount",
    GlobalIdentity = "GlobalIdentity",
    GlobalAccessController = "GlobalAccessController",
    GlobalOneResourcePool = "GlobalOneResourcePool",
    GlobalTwoResourcePool = "GlobalTwoResourcePool",
    GlobalMultiResourcePool = "GlobalMultiResourcePool",
    GlobalVirtualSecp256k1Account = "GlobalVirtualSecp256k1Account",
    GlobalVirtualSecp256k1Identity = "GlobalVirtualSecp256k1Identity",
    GlobalVirtualEd25519Account = "GlobalVirtualEd25519Account",
    GlobalVirtualEd25519Identity = "GlobalVirtualEd25519Identity",
    GlobalFungibleResourceManager = "GlobalFungibleResourceManager",
    InternalFungibleVault = "InternalFungibleVault",
    GlobalNonFungibleResourceManager = "GlobalNonFungibleResourceManager",
    InternalNonFungibleVault = "InternalNonFungibleVault",
    InternalGenericComponent = "InternalGenericComponent",
    InternalKeyValueStore = "InternalKeyValueStore"
}
export type AddressEntityTypeOutput = SerializableEntityType;
export type AddressDecodeInput = string;
export type DeriveVirtualAccountAddressFromPublicKeyOutput = SerializableNodeId;
export type DeriveVirtualIdentityAddressFromPublicKeyOutput = SerializableNodeId;
export type DeriveVirtualAccountAddressFromOlympiaAccountAddressOutput = SerializableNodeId;
export type DeriveResourceAddressFromOlympiaResourceAddressOutput = SerializableNodeId;
export type DerivePublicKeyFromOlympiaAccountAddressInput = string;
export type SerializableSecp256k1PublicKey = string;
export type DerivePublicKeyFromOlympiaAccountAddressOutput = SerializableSecp256k1PublicKey;
export type DeriveOlympiaAccountAddressFromPublicKeyOutput = string;
export type DeriveNodeAddressFromPublicKeyOutput = string;
export type DeriveBech32mTransactionIdentifierFromIntentHashOutput = string;
export type SerializableHash = string;
export type InstructionsHashOutput = SerializableHash;
export type SerializableInstructions = {
    kind: "String";
    value: string;
} | {
    kind: "Parsed";
    value: SerializableInstruction[];
};
export type InstructionsConvertOutput = SerializableInstructions;
export type SerializableBytes = string;
export type InstructionsCompileOutput = SerializableBytes;
export type InstructionsDecompileOutput = SerializableInstructions;
export type SerializableU8 = string;
export type SerializableU64 = string;
export type SerializableEpoch = SerializableU64;
export type SerializableU32 = string;
export type SerializablePublicKey = {
    kind: "Secp256k1";
    value: string;
} | {
    kind: "Ed25519";
    value: string;
};
export type SerializableU16 = string;
export interface SerializableTransactionHeader {
    network_id: SerializableU8;
    start_epoch_inclusive: SerializableEpoch;
    end_epoch_exclusive: SerializableEpoch;
    nonce: SerializableU32;
    notary_public_key: SerializablePublicKey;
    notary_is_signatory: boolean;
    tip_percentage: SerializableU16;
}
export interface SerializableTransactionManifest {
    instructions: SerializableInstructions;
    blobs: SerializableBytes[];
}
export type SerializableMessage = {
    kind: "None";
    value?: undefined;
} | {
    kind: "PlainText";
    value: SerializablePlainTextMessage;
} | {
    kind: "Encrypted";
    value: SerializableEncryptedMessage;
};
export interface SerializableIntent {
    header: SerializableTransactionHeader;
    manifest: SerializableTransactionManifest;
    message: SerializableMessage;
}
export type IntentHashInput = SerializableIntent;
export interface SerializableTransactionHash {
    hash: SerializableHash;
    id: string;
}
export type IntentHashOutput = SerializableTransactionHash;
export type IntentCompileInput = SerializableIntent;
export type IntentCompileOutput = SerializableBytes;
export type IntentDecompileOutput = SerializableIntent;
export type ManifestHashOutput = SerializableHash;
export type ManifestCompileOutput = SerializableBytes;
export type ManifestDecompileOutput = SerializableTransactionManifest;
export type ManifestSborDecodeToStringOutput = string;
export type SerializableSignatureWithPublicKey = {
    kind: "Secp256k1";
    value: {
        signature: string;
    };
} | {
    kind: "Ed25519";
    value: {
        signature: string;
        public_key: string;
    };
};
export interface SerializableSignedIntent {
    intent: SerializableIntent;
    intent_signatures: SerializableSignatureWithPublicKey[];
}
export type SerializableSignature = {
    kind: "Secp256k1";
    value: string;
} | {
    kind: "Ed25519";
    value: string;
};
export interface SerializableNotarizedTransaction {
    signed_intent: SerializableSignedIntent;
    notary_signature: SerializableSignature;
}
export type NotarizedTransactionHashInput = SerializableNotarizedTransaction;
export type NotarizedTransactionHashOutput = SerializableTransactionHash;
export type NotarizedTransactionCompileInput = SerializableNotarizedTransaction;
export type NotarizedTransactionCompileOutput = SerializableBytes;
export type NotarizedTransactionDecompileOutput = SerializableNotarizedTransaction;
export type ScryptoSborDecodeToStringOutput = string;
export type SerializableScryptoSborStringRepresentation = {
    kind: "ProgrammaticJson";
    value: string;
};
export type ScryptoSborEncodeStringRepresentationInput = SerializableScryptoSborStringRepresentation;
export type ScryptoSborEncodeStringRepresentationOutput = SerializableBytes;
export type SignedIntentHashInput = SerializableSignedIntent;
export type SignedIntentHashOutput = SerializableTransactionHash;
export type SignedIntentCompileInput = SerializableSignedIntent;
export type SignedIntentCompileOutput = SerializableBytes;
export type SignedIntentDecompileOutput = SerializableSignedIntent;
export type UtilsKnownAddressesInput = SerializableU8;
export type SerializableNonFungibleLocalId = string;
export type SerializableU128 = string;
export type SerializableI8 = string;
export type SerializableI16 = string;
export type SerializableI32 = string;
export type SerializableI64 = string;
export type SerializableI128 = string;
export type SerializableDecimal = string;
export type SerializablePreciseDecimal = string;
export type SerializableEd25519PublicKey = string;
export type SerializableNonFungibleGlobalId = string;
export type SerializableAesWrapped128BitKey = string;
export type SerializablePublicKeyFingerprint = string;
export interface AddressDecodeOutput {
    network_id: SerializableU8;
    entity_type: SerializableEntityType;
    hrp: string;
    data: SerializableBytes;
}
export interface DeriveVirtualAccountAddressFromPublicKeyInput {
    public_key: SerializablePublicKey;
    network_id: SerializableU8;
}
export interface DeriveVirtualIdentityAddressFromPublicKeyInput {
    public_key: SerializablePublicKey;
    network_id: SerializableU8;
}
export interface DeriveVirtualSignatureNonFungibleGlobalIdFromPublicKeyInput {
    public_key: SerializablePublicKey;
    network_id: SerializableU8;
}
export interface DeriveVirtualAccountAddressFromOlympiaAccountAddressInput {
    olympia_account_address: string;
    network_id: SerializableU8;
}
export interface DeriveResourceAddressFromOlympiaResourceAddressInput {
    olympia_resource_address: string;
    network_id: SerializableU8;
}
export declare enum SerializableOlympiaNetwork {
    Mainnet = "Mainnet",
    Stokenet = "Stokenet",
    Releasenet = "Releasenet",
    RCNet = "RCNet",
    Milestonenet = "Milestonenet",
    Devopsnet = "Devopsnet",
    Sandpitnet = "Sandpitnet",
    Localnet = "Localnet"
}
export interface DeriveOlympiaAccountAddressFromPublicKeyInput {
    olympia_network: SerializableOlympiaNetwork;
    public_key: SerializableSecp256k1PublicKey;
}
export interface DeriveNodeAddressFromPublicKeyInput {
    network_id: SerializableU8;
    public_key: SerializableSecp256k1PublicKey;
}
export interface DeriveBech32mTransactionIdentifierFromIntentHashInput {
    network_id: SerializableU8;
    hash: SerializableHash;
}
export interface ExecutionAnalyzeInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
    preview_receipt: SerializableBytes;
}
export interface SerializableFeeLocks {
    lock: SerializableDecimal;
    contingent_lock: SerializableDecimal;
}
export interface SerializableFeeSummary {
    execution_cost: SerializableDecimal;
    finalization_cost: SerializableDecimal;
    storage_expansion_cost: SerializableDecimal;
    royalty_cost: SerializableDecimal;
}
export type SerializableTransactionType = {
    kind: "SimpleTransfer";
    value: SerializableSimpleTransferTransactionType;
} | {
    kind: "Transfer";
    value: SerializableTransferTransactionType;
} | {
    kind: "AccountDepositSettings";
    value: SerializableAccountDepositSettingsTransactionType;
} | {
    kind: "Stake";
    value: SerializableStakeTransactionType;
} | {
    kind: "Unstake";
    value: SerializableUnstakeTransactionType;
} | {
    kind: "ClaimStake";
    value: SerializableClaimStakeTransactionType;
} | {
    kind: "GeneralTransaction";
    value: SerializableGeneralTransactionType;
};
export declare enum SerializableReservedInstruction {
    AccountLockFee = "AccountLockFee",
    AccountSecurify = "AccountSecurify",
    IdentitySecurify = "IdentitySecurify",
    AccountUpdateSettings = "AccountUpdateSettings",
    AccessController = "AccessController"
}
export interface ExecutionAnalyzeOutput {
    fee_locks: SerializableFeeLocks;
    fee_summary: SerializableFeeSummary;
    transaction_types: SerializableTransactionType[];
    reserved_instructions: SerializableReservedInstruction[];
}
export type SerializableResourceSpecifier = {
    kind: "Amount";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableDecimal;
    };
} | {
    kind: "Ids";
    value: {
        resource_address: SerializableNodeId;
        ids: SerializableNonFungibleLocalId[];
    };
};
export interface SerializableSimpleTransferTransactionType {
    from: SerializableNodeId;
    to: SerializableNodeId;
    transferred: SerializableResourceSpecifier;
}
export type SerializableResources = {
    kind: "Amount";
    value: SerializableDecimal;
} | {
    kind: "Ids";
    value: SerializableNonFungibleLocalId[];
};
export interface SerializableTransferTransactionType {
    from: SerializableNodeId;
    transfers: Record<SerializableNodeId, Record<SerializableNodeId, SerializableResources>>;
}
export type SerializableResourcePreferenceAction = {
    kind: "Set";
    value: SerializableResourcePreference;
} | {
    kind: "Remove";
    value?: undefined;
};
export declare enum SerializableDefaultDepositRule {
    Accept = "Accept",
    Reject = "Reject",
    AllowExisting = "AllowExisting"
}
export type SerializableResourceOrNonFungible = {
    kind: "NonFungible";
    value: SerializableNonFungibleGlobalId;
} | {
    kind: "Resource";
    value: SerializableNodeId;
};
export interface SerializableAuthorizedDepositorsChanges {
    added: SerializableResourceOrNonFungible[];
    removed: SerializableResourceOrNonFungible[];
}
export interface SerializableAccountDepositSettingsTransactionType {
    resource_preference_changes: Record<SerializableNodeId, Record<SerializableNodeId, SerializableResourcePreferenceAction>>;
    default_deposit_rule_changes: Record<SerializableNodeId, SerializableDefaultDepositRule>;
    authorized_depositors_changes: Record<SerializableNodeId, SerializableAuthorizedDepositorsChanges>;
}
export interface SerializableStakeInformation {
    from_account: SerializableNodeId;
    validator_address: SerializableNodeId;
    stake_unit_resource: SerializableNodeId;
    stake_unit_amount: SerializableDecimal;
    staked_xrd: SerializableDecimal;
}
export interface SerializableStakeTransactionType {
    stakes: SerializableStakeInformation[];
}
export interface SerializableUnstakeData {
    name: string;
    claim_epoch: SerializableU64;
    claim_amount: SerializableDecimal;
}
export interface SerializableUnstakeInformation {
    from_account: SerializableNodeId;
    stake_unit_address: SerializableNodeId;
    stake_unit_amount: SerializableDecimal;
    validator_address: SerializableNodeId;
    claim_nft_resource: SerializableNodeId;
    claim_nft_local_id: SerializableNonFungibleLocalId;
    claim_nft_data: SerializableUnstakeData;
}
export interface SerializableUnstakeTransactionType {
    unstakes: SerializableUnstakeInformation[];
}
export interface SerializableClaimStakeInformation {
    from_account: SerializableNodeId;
    validator_address: SerializableNodeId;
    claim_nft_resource: SerializableNodeId;
    claim_nft_local_ids: SerializableNodeId[];
    claimed_xrd: SerializableDecimal;
}
export interface SerializableClaimStakeTransactionType {
    claims: SerializableClaimStakeInformation[];
}
export type SerializableResourceTracker = {
    kind: "Fungible";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableSource<SerializableDecimal>;
    };
} | {
    kind: "NonFungible";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableSource<SerializableDecimal>;
        ids: SerializableSource<SerializableNonFungibleLocalId[]>;
    };
};
export interface InstructionsExtractAddressesOutput {
    addresses: Record<SerializableEntityType, SerializableNodeId[]>;
    named_addresses: SerializableU32[];
}
export type SerializableMetadataValue = {
    kind: "String";
    value: string;
} | {
    kind: "Bool";
    value: boolean;
} | {
    kind: "U8";
    value: SerializableU8;
} | {
    kind: "U32";
    value: SerializableU32;
} | {
    kind: "U64";
    value: SerializableU64;
} | {
    kind: "I32";
    value: SerializableI32;
} | {
    kind: "I64";
    value: SerializableI64;
} | {
    kind: "Decimal";
    value: SerializableDecimal;
} | {
    kind: "GlobalAddress";
    value: SerializableNodeId;
} | {
    kind: "PublicKey";
    value: SerializablePublicKey;
} | {
    kind: "NonFungibleGlobalId";
    value: SerializableNonFungibleGlobalId;
} | {
    kind: "NonFungibleLocalId";
    value: SerializableNonFungibleLocalId;
} | {
    kind: "Instant";
    value: SerializableI64;
} | {
    kind: "Url";
    value: string;
} | {
    kind: "Origin";
    value: string;
} | {
    kind: "PublicKeyHash";
    value: SerializablePublicKeyHash;
} | {
    kind: "StringArray";
    value: string[];
} | {
    kind: "BoolArray";
    value: boolean[];
} | {
    kind: "U8Array";
    value: SerializableU8[];
} | {
    kind: "U32Array";
    value: SerializableU32[];
} | {
    kind: "U64Array";
    value: SerializableU64[];
} | {
    kind: "I32Array";
    value: SerializableI32[];
} | {
    kind: "I64Array";
    value: SerializableI64[];
} | {
    kind: "DecimalArray";
    value: SerializableDecimal[];
} | {
    kind: "GlobalAddressArray";
    value: SerializableNodeId[];
} | {
    kind: "PublicKeyArray";
    value: SerializablePublicKey[];
} | {
    kind: "NonFungibleGlobalIdArray";
    value: SerializableNonFungibleGlobalId[];
} | {
    kind: "NonFungibleLocalIdArray";
    value: SerializableNonFungibleLocalId[];
} | {
    kind: "InstantArray";
    value: SerializableI64[];
} | {
    kind: "UrlArray";
    value: string[];
} | {
    kind: "OriginArray";
    value: string[];
} | {
    kind: "PublicKeyHashArray";
    value: SerializablePublicKeyHash[];
};
export interface SerializableGeneralTransactionType {
    account_proofs: SerializableNodeId[];
    account_withdraws: Record<SerializableNodeId, SerializableResourceTracker[]>;
    account_deposits: Record<SerializableNodeId, SerializableResourceTracker[]>;
    addresses_in_manifest: InstructionsExtractAddressesOutput;
    metadata_of_newly_created_entities: Record<SerializableNodeId, Record<string, SerializableMetadataValue>>;
    data_of_newly_minted_non_fungibles: Record<SerializableNodeId, Record<SerializableNonFungibleLocalId, SerializableBytes>>;
}
export interface BuildInformationInput {
}
export type SerializableDependencyInformation = {
    kind: "Version";
    value: string;
} | {
    kind: "Tag";
    value: string;
} | {
    kind: "Branch";
    value: string;
} | {
    kind: "Rev";
    value: string;
};
export interface BuildInformationOutput {
    version: string;
    scrypto_dependency: SerializableDependencyInformation;
}
export interface InstructionsHashInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
}
export declare enum SerializableInstructionsKind {
    String = "String",
    Parsed = "Parsed"
}
export interface InstructionsConvertInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
    instructions_kind: SerializableInstructionsKind;
}
export interface InstructionsCompileInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
}
export interface InstructionsDecompileInput {
    compiled: SerializableBytes;
    network_id: SerializableU8;
    instructions_kind: SerializableInstructionsKind;
}
export interface InstructionsStaticallyValidateInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
}
export interface InstructionsExtractAddressesInput {
    instructions: SerializableInstructions;
    network_id: SerializableU8;
}
export interface IntentDecompileInput {
    compiled: SerializableBytes;
    instructions_kind: SerializableInstructionsKind;
}
export interface SerializableMessageValidationConfig {
    max_plaintext_message_length: SerializableU64;
    max_encrypted_message_length: SerializableU64;
    max_mime_type_length: SerializableU64;
    max_decryptors: SerializableU64;
}
export interface SerializableValidationConfig {
    network_id: SerializableU8;
    max_notarized_payload_size: SerializableU64;
    min_tip_percentage: SerializableU16;
    max_tip_percentage: SerializableU16;
    max_epoch_range: SerializableU64;
    message_validation: SerializableMessageValidationConfig;
}
export interface IntentStaticallyValidateInput {
    intent: SerializableIntent;
    validation_config: SerializableValidationConfig;
}
export interface ManifestHashInput {
    manifest: SerializableTransactionManifest;
    network_id: SerializableU8;
}
export interface ManifestCompileInput {
    manifest: SerializableTransactionManifest;
    network_id: SerializableU8;
}
export interface ManifestDecompileInput {
    compiled: SerializableBytes;
    network_id: SerializableU8;
    instructions_kind: SerializableInstructionsKind;
}
export interface ManifestStaticallyValidateInput {
    manifest: SerializableTransactionManifest;
    network_id: SerializableU8;
}
export type SerializableManifestSborStringRepresentation = {
    kind: "ManifestString";
    value?: undefined;
} | {
    kind: "Json";
    value: SerializableSerializationMode;
};
export type SerializableLocalTypeId = {
    kind: "WellKnown";
    value: SerializableU8;
} | {
    kind: "SchemaLocalIndex";
    value: SerializableU64;
};
export interface PayloadSchema {
    local_type_id: SerializableLocalTypeId;
    schema: SerializableBytes;
}
export interface ManifestSborDecodeToStringInput {
    encoded_payload: SerializableBytes;
    representation: SerializableManifestSborStringRepresentation;
    network_id: SerializableU8;
    schema?: PayloadSchema;
}
export interface NotarizedTransactionDecompileInput {
    compiled: SerializableBytes;
    instructions_kind: SerializableInstructionsKind;
}
export interface NotarizedTransactionStaticallyValidateInput {
    notarized_transaction: SerializableNotarizedTransaction;
    validation_config: SerializableValidationConfig;
}
export declare enum SerializableSerializationMode {
    Programmatic = "Programmatic",
    Model = "Model",
    Natural = "Natural"
}
export interface ScryptoSborDecodeToStringInput {
    encoded_payload: SerializableBytes;
    representation: SerializableSerializationMode;
    network_id: SerializableU8;
    schema?: PayloadSchema;
}
export interface SignedIntentDecompileInput {
    compiled: SerializableBytes;
    instructions_kind: SerializableInstructionsKind;
}
export interface SignedIntentStaticallyValidateInput {
    signed_intent: SerializableSignedIntent;
    validation_config: SerializableValidationConfig;
}
export interface ResourceAddresses {
    xrd: SerializableNodeId;
    secp256k1_signature_virtual_badge: SerializableNodeId;
    ed25519_signature_virtual_badge: SerializableNodeId;
    package_of_direct_caller_virtual_badge: SerializableNodeId;
    global_caller_virtual_badge: SerializableNodeId;
    system_transaction_badge: SerializableNodeId;
    package_owner_badge: SerializableNodeId;
    validator_owner_badge: SerializableNodeId;
    account_owner_badge: SerializableNodeId;
    identity_owner_badge: SerializableNodeId;
}
export interface PackageAddresses {
    package_package: SerializableNodeId;
    resource_package: SerializableNodeId;
    account_package: SerializableNodeId;
    identity_package: SerializableNodeId;
    consensus_manager_package: SerializableNodeId;
    access_controller_package: SerializableNodeId;
    pool_package: SerializableNodeId;
    transaction_processor_package: SerializableNodeId;
    metadata_module_package: SerializableNodeId;
    royalty_module_package: SerializableNodeId;
    role_assignment_module_package: SerializableNodeId;
    genesis_helper_package: SerializableNodeId;
    faucet_package: SerializableNodeId;
}
export interface ComponentAddresses {
    consensus_manager: SerializableNodeId;
    genesis_helper: SerializableNodeId;
    faucet: SerializableNodeId;
}
export interface UtilsKnownAddressesOutput {
    resource_addresses: ResourceAddresses;
    package_addresses: PackageAddresses;
    component_addresses: ComponentAddresses;
}
export type SerializableMessageContent = {
    kind: "String";
    value: string;
} | {
    kind: "Bytes";
    value: SerializableBytes;
};
export interface SerializablePlainTextMessage {
    mime_type: string;
    message: SerializableMessageContent;
}
export declare enum SerializableCurveType {
    Ed25519 = "Ed25519",
    Secp256k1 = "Secp256k1"
}
export type SerializableDecryptorsByCurve = {
    kind: "Ed25519";
    value: {
        dh_ephemeral_public_key: SerializableEd25519PublicKey;
        decryptors: Record<SerializablePublicKeyFingerprint, SerializableAesWrapped128BitKey>;
    };
} | {
    kind: "Secp256k1";
    value: {
        dh_ephemeral_public_key: SerializableSecp256k1PublicKey;
        decryptors: Record<SerializablePublicKeyFingerprint, SerializableAesWrapped128BitKey>;
    };
};
export interface SerializableEncryptedMessage {
    encrypted: SerializableBytes;
    decryptors_by_curve: Record<SerializableCurveType, SerializableDecryptorsByCurve>;
}
export type SerializableManifestValue = {
    kind: "Bool";
    value: {
        value: boolean;
    };
} | {
    kind: "I8";
    value: {
        value: SerializableI8;
    };
} | {
    kind: "I16";
    value: {
        value: SerializableI16;
    };
} | {
    kind: "I32";
    value: {
        value: SerializableI32;
    };
} | {
    kind: "I64";
    value: {
        value: SerializableI64;
    };
} | {
    kind: "I128";
    value: {
        value: SerializableI128;
    };
} | {
    kind: "U8";
    value: {
        value: SerializableU8;
    };
} | {
    kind: "U16";
    value: {
        value: SerializableU16;
    };
} | {
    kind: "U32";
    value: {
        value: SerializableU32;
    };
} | {
    kind: "U64";
    value: {
        value: SerializableU64;
    };
} | {
    kind: "U128";
    value: {
        value: SerializableU128;
    };
} | {
    kind: "String";
    value: {
        value: string;
    };
} | {
    kind: "Enum";
    value: {
        discriminator: SerializableU8;
        fields: SerializableManifestValue[];
    };
} | {
    kind: "Array";
    value: {
        element_value_kind: SerializableManifestValueKind;
        elements: SerializableManifestValue[];
    };
} | {
    kind: "Tuple";
    value: {
        fields: SerializableManifestValue[];
    };
} | {
    kind: "Map";
    value: {
        key_value_kind: SerializableManifestValueKind;
        value_value_kind: SerializableManifestValueKind;
        entries: SerializableMapEntry[];
    };
} | {
    kind: "Address";
    value: {
        value: SerializableManifestAddress;
    };
} | {
    kind: "Bucket";
    value: {
        value: SerializableU32;
    };
} | {
    kind: "Proof";
    value: {
        value: SerializableU32;
    };
} | {
    kind: "Expression";
    value: {
        value: SerializableExpression;
    };
} | {
    kind: "Blob";
    value: {
        value: SerializableHash;
    };
} | {
    kind: "Decimal";
    value: {
        value: SerializableDecimal;
    };
} | {
    kind: "PreciseDecimal";
    value: {
        value: SerializablePreciseDecimal;
    };
} | {
    kind: "NonFungibleLocalId";
    value: {
        value: SerializableNonFungibleLocalId;
    };
} | {
    kind: "AddressReservation";
    value: {
        value: SerializableU32;
    };
};
export interface SerializableMapEntry {
    key: SerializableManifestValue;
    value: SerializableManifestValue;
}
export declare enum SerializableResourcePreference {
    Allowed = "Allowed",
    Disallowed = "Disallowed"
}
export type SerializableSource<T> = {
    kind: "Guaranteed";
    value: {
        value: T;
    };
} | {
    kind: "Predicted";
    value: {
        value: T;
        instruction_index: SerializableU64;
    };
};
export type InstructionsStaticallyValidateOutput = {
    kind: "Valid";
    value?: undefined;
} | {
    kind: "Invalid";
    value: string;
};
export type IntentStaticallyValidateOutput = {
    kind: "Valid";
    value?: undefined;
} | {
    kind: "Invalid";
    value: string;
};
export type ManifestStaticallyValidateOutput = {
    kind: "Valid";
    value?: undefined;
} | {
    kind: "Invalid";
    value: string;
};
export type NotarizedTransactionStaticallyValidateOutput = {
    kind: "Valid";
    value?: undefined;
} | {
    kind: "Invalid";
    value: string;
};
export type SignedIntentStaticallyValidateOutput = {
    kind: "Valid";
    value?: undefined;
} | {
    kind: "Invalid";
    value: string;
};
export type SerializablePublicKeyHash = {
    kind: "Secp256k1";
    value: string;
} | {
    kind: "Ed25519";
    value: string;
};
export declare enum SerializableExpression {
    EntireWorktop = "EntireWorktop",
    EntireAuthZone = "EntireAuthZone"
}
export type SerializableManifestAddress = {
    kind: "Static";
    value: SerializableNodeId;
} | {
    kind: "Named";
    value: SerializableU32;
};
export type SerializableInstruction = {
    kind: "TakeAllFromWorktop";
    value: {
        resource_address: SerializableNodeId;
    };
} | {
    kind: "TakeFromWorktop";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableDecimal;
    };
} | {
    kind: "TakeNonFungiblesFromWorktop";
    value: {
        resource_address: SerializableNodeId;
        ids: SerializableNonFungibleLocalId[];
    };
} | {
    kind: "ReturnToWorktop";
    value: {
        bucket_id: SerializableU32;
    };
} | {
    kind: "AssertWorktopContainsAny";
    value: {
        resource_address: SerializableNodeId;
    };
} | {
    kind: "AssertWorktopContains";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableDecimal;
    };
} | {
    kind: "AssertWorktopContainsNonFungibles";
    value: {
        resource_address: SerializableNodeId;
        ids: SerializableNonFungibleLocalId[];
    };
} | {
    kind: "PopFromAuthZone";
    value?: undefined;
} | {
    kind: "PushToAuthZone";
    value: {
        proof_id: SerializableU32;
    };
} | {
    kind: "CreateProofFromAuthZoneOfAmount";
    value: {
        resource_address: SerializableNodeId;
        amount: SerializableDecimal;
    };
} | {
    kind: "CreateProofFromAuthZoneOfNonFungibles";
    value: {
        resource_address: SerializableNodeId;
        ids: SerializableNonFungibleLocalId[];
    };
} | {
    kind: "CreateProofFromAuthZoneOfAll";
    value: {
        resource_address: SerializableNodeId;
    };
} | {
    kind: "DropAllProofs";
    value?: undefined;
} | {
    kind: "DropNamedProofs";
    value?: undefined;
} | {
    kind: "DropAuthZoneProofs";
    value?: undefined;
} | {
    kind: "DropAuthZoneRegularProofs";
    value?: undefined;
} | {
    kind: "DropAuthZoneSignatureProofs";
    value?: undefined;
} | {
    kind: "CreateProofFromBucketOfAmount";
    value: {
        bucket_id: SerializableU32;
        amount: SerializableDecimal;
    };
} | {
    kind: "CreateProofFromBucketOfNonFungibles";
    value: {
        bucket_id: SerializableU32;
        ids: SerializableNonFungibleLocalId[];
    };
} | {
    kind: "CreateProofFromBucketOfAll";
    value: {
        bucket_id: SerializableU32;
    };
} | {
    kind: "BurnResource";
    value: {
        bucket_id: SerializableU32;
    };
} | {
    kind: "CloneProof";
    value: {
        proof_id: SerializableU32;
    };
} | {
    kind: "DropProof";
    value: {
        proof_id: SerializableU32;
    };
} | {
    kind: "CallFunction";
    value: {
        package_address: SerializableManifestAddress;
        blueprint_name: string;
        function_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "CallMethod";
    value: {
        address: SerializableManifestAddress;
        method_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "CallRoyaltyMethod";
    value: {
        address: SerializableManifestAddress;
        method_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "CallMetadataMethod";
    value: {
        address: SerializableManifestAddress;
        method_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "CallRoleAssignmentMethod";
    value: {
        address: SerializableManifestAddress;
        method_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "CallDirectVaultMethod";
    value: {
        address: SerializableNodeId;
        method_name: string;
        args: SerializableManifestValue;
    };
} | {
    kind: "AllocateGlobalAddress";
    value: {
        package_address: SerializableNodeId;
        blueprint_name: string;
    };
};
export declare enum SerializableManifestValueKind {
    Bool = "Bool",
    I8 = "I8",
    I16 = "I16",
    I32 = "I32",
    I64 = "I64",
    I128 = "I128",
    U8 = "U8",
    U16 = "U16",
    U32 = "U32",
    U64 = "U64",
    U128 = "U128",
    String = "String",
    Enum = "Enum",
    Array = "Array",
    Tuple = "Tuple",
    Map = "Map",
    Address = "Address",
    Bucket = "Bucket",
    Proof = "Proof",
    Expression = "Expression",
    Blob = "Blob",
    Decimal = "Decimal",
    PreciseDecimal = "PreciseDecimal",
    NonFungibleLocalId = "NonFungibleLocalId",
    AddressReservation = "AddressReservation"
}
