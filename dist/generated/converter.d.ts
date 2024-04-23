import { AuthorizedDepositorsChanges, DecimalSource, DecryptorsByCurve, DefaultDepositRule, EncryptedMessage, EntityType, Expression, FeeLocks, FeeSummary, Instruction, Instructions, Intent, ManifestAddress, ManifestSborStringRepresentation, Message, MessageContent, MessageValidationConfig, NonFungibleLocalIdArraySource, NotarizedTransaction, OlympiaNetwork, PlainTextMessage, PublicKey, ResourceOrNonFungible, ResourcePreference, ResourcePreferenceAction, Resources, ResourceSpecifier, ResourceTracker, SerializationMode, Signature, SignatureWithPublicKey, SignedIntent, TransactionHash, TransactionHeader, TransactionManifest, ValidationConfig, Value, ValueKind } from "../index";
import { SerializableAuthorizedDepositorsChanges, SerializableDecimal, SerializableDecryptorsByCurve, SerializableDefaultDepositRule, SerializableEncryptedMessage, SerializableEntityType, SerializableExpression, SerializableFeeLocks, SerializableFeeSummary, SerializableInstruction, SerializableInstructions, SerializableIntent, SerializableManifestAddress, SerializableManifestSborStringRepresentation, SerializableManifestValue, SerializableManifestValueKind, SerializableMessage, SerializableMessageContent, SerializableMessageValidationConfig, SerializableNonFungibleLocalId, SerializableNotarizedTransaction, SerializableOlympiaNetwork, SerializablePlainTextMessage, SerializablePublicKey, SerializableResourceOrNonFungible, SerializableResourcePreference, SerializableResourcePreferenceAction, SerializableResources, SerializableResourceSpecifier, SerializableResourceTracker, SerializableSerializationMode, SerializableSignature, SerializableSignatureWithPublicKey, SerializableSignedIntent, SerializableSource, SerializableTransactionHash, SerializableTransactionHeader, SerializableTransactionManifest, SerializableValidationConfig } from "./generated";
/**
 * A class that provides functionality for converting the generated models to their hand-written
 * counterparts.
 */
export declare class GeneratedConverter {
    static PublicKey: {
        new (): {};
        toGenerated(value: PublicKey): SerializablePublicKey;
        fromGenerated(value: SerializablePublicKey): PublicKey;
    };
    static Signature: {
        new (): {};
        toGenerated(value: Signature): SerializableSignature;
        fromGenerated(value: SerializableSignature): Signature;
    };
    static SignatureWithPublicKey: {
        new (): {};
        toGenerated(value: SignatureWithPublicKey): SerializableSignatureWithPublicKey;
        fromGenerated(value: SerializableSignatureWithPublicKey): SignatureWithPublicKey;
    };
    static OlympiaNetwork: {
        new (): {};
        toGenerated(value: OlympiaNetwork): SerializableOlympiaNetwork;
        fromGenerated(value: SerializableOlympiaNetwork): OlympiaNetwork;
    };
    static SerializationMode: {
        new (): {};
        toGenerated(value: SerializationMode): SerializableSerializationMode;
        fromGenerated(value: SerializableSerializationMode): SerializationMode;
    };
    static ManifestSborStringRepresentation: {
        new (): {};
        toGenerated(value: ManifestSborStringRepresentation): SerializableManifestSborStringRepresentation;
        fromGenerated(value: SerializableManifestSborStringRepresentation): ManifestSborStringRepresentation;
    };
    static ManifestValueKind: {
        new (): {};
        toGenerated(value: ValueKind): SerializableManifestValueKind;
        fromGenerated(value: SerializableManifestValueKind): ValueKind;
    };
    static Expression: {
        new (): {};
        toGenerated(value: Expression): SerializableExpression;
        fromGenerated(value: SerializableExpression): Expression;
    };
    static ManifestAddress: {
        new (): {};
        toGenerated(value: ManifestAddress): SerializableManifestAddress;
        fromGenerated(value: SerializableManifestAddress): ManifestAddress;
    };
    static ManifestValue: {
        new (): {};
        toGenerated(value: Value): SerializableManifestValue;
        fromGenerated(value: SerializableManifestValue): Value;
    };
    static Instruction: {
        new (): {};
        toGenerated(value: Instruction): SerializableInstruction;
        fromGenerated(value: SerializableInstruction): Instruction;
    };
    static Instructions: {
        new (): {};
        toGenerated(value: Instructions): SerializableInstructions;
        fromGenerated(value: SerializableInstructions): Instructions;
    };
    static TransactionManifest: {
        new (): {};
        toGenerated(value: TransactionManifest): SerializableTransactionManifest;
        fromGenerated(value: SerializableTransactionManifest): TransactionManifest;
    };
    static TransactionHeader: {
        new (): {};
        toGenerated(value: TransactionHeader): SerializableTransactionHeader;
        fromGenerated(value: SerializableTransactionHeader): TransactionHeader;
    };
    static TransactionHash: {
        new (): {};
        toGenerated(value: TransactionHash): SerializableTransactionHash;
        fromGenerated(value: SerializableTransactionHash): TransactionHash;
    };
    static Intent: {
        new (): {};
        toGenerated(value: Intent): SerializableIntent;
        fromGenerated(value: SerializableIntent): Intent;
    };
    static SignedIntent: {
        new (): {};
        toGenerated(value: SignedIntent): SerializableSignedIntent;
        fromGenerated(value: SerializableSignedIntent): SignedIntent;
    };
    static NotarizedTransaction: {
        new (): {};
        toGenerated(value: NotarizedTransaction): SerializableNotarizedTransaction;
        fromGenerated(value: SerializableNotarizedTransaction): NotarizedTransaction;
    };
    static EntityType: {
        new (): {};
        toGenerated(value: EntityType): SerializableEntityType;
        fromGenerated(value: SerializableEntityType): EntityType;
    };
    static MessageValidationConfig: {
        new (): {};
        toGenerated(value: MessageValidationConfig): SerializableMessageValidationConfig;
        fromGenerated(value: SerializableMessageValidationConfig): MessageValidationConfig;
    };
    static FeeSummary: {
        new (): {};
        toGenerated(value: FeeSummary): SerializableFeeSummary;
        fromGenerated(value: SerializableFeeSummary): FeeSummary;
    };
    static FeeLocks: {
        new (): {};
        toGenerated(value: FeeLocks): SerializableFeeLocks;
        fromGenerated(value: SerializableFeeLocks): FeeLocks;
    };
    static DecimalSource: {
        new (): {};
        toGenerated(value: DecimalSource): SerializableSource<SerializableDecimal>;
        fromGenerated(value: SerializableSource<SerializableDecimal>): DecimalSource;
    };
    static NonFungibleLocalIdArraySource: {
        new (): {};
        toGenerated(value: NonFungibleLocalIdArraySource): SerializableSource<SerializableNonFungibleLocalId[]>;
        fromGenerated(value: SerializableSource<SerializableNonFungibleLocalId[]>): NonFungibleLocalIdArraySource;
    };
    static ResourceTracker: {
        new (): {};
        toGenerated(value: ResourceTracker): SerializableResourceTracker;
        fromGenerated(value: SerializableResourceTracker): ResourceTracker;
    };
    static ResourceOrNonFungible: {
        new (): {};
        toGenerated(value: ResourceOrNonFungible): SerializableResourceOrNonFungible;
        fromGenerated(value: SerializableResourceOrNonFungible): ResourceOrNonFungible;
    };
    static AuthorizedDepositorsChanges: {
        new (): {};
        toGenerated(value: AuthorizedDepositorsChanges): SerializableAuthorizedDepositorsChanges;
        fromGenerated(value: SerializableAuthorizedDepositorsChanges): AuthorizedDepositorsChanges;
    };
    static DefaultDepositRule: {
        new (): {};
        toGenerated(value: DefaultDepositRule): SerializableDefaultDepositRule;
        fromGenerated(value: SerializableDefaultDepositRule): DefaultDepositRule;
    };
    static ResourcePreference: {
        new (): {};
        toGenerated(value: ResourcePreference): SerializableResourcePreference;
        fromGenerated(value: SerializableResourcePreference): ResourcePreference;
    };
    static Resources: {
        new (): {};
        toGenerated(value: Resources): SerializableResources;
        fromGenerated(value: SerializableResources): Resources;
    };
    static ResourceSpecifier: {
        new (): {};
        toGenerated(value: ResourceSpecifier): SerializableResourceSpecifier;
        fromGenerated(value: SerializableResourceSpecifier): ResourceSpecifier;
    };
    static ResourcePreferenceAction: {
        new (): {};
        toGenerated(value: ResourcePreferenceAction): SerializableResourcePreferenceAction;
        fromGenerated(value: SerializableResourcePreferenceAction): ResourcePreferenceAction;
    };
    static ValidationConfig: {
        new (): {};
        toGenerated(value: ValidationConfig): SerializableValidationConfig;
        fromGenerated(value: SerializableValidationConfig): ValidationConfig;
    };
    static Message: {
        new (): {};
        toGenerated(value: Message): SerializableMessage;
        fromGenerated(value: SerializableMessage): Message;
    };
    static PlainTextMessage: {
        new (): {};
        toGenerated(value: PlainTextMessage): SerializablePlainTextMessage;
        fromGenerated(value: SerializablePlainTextMessage): PlainTextMessage;
    };
    static MessageContent: {
        new (): {};
        toGenerated(value: MessageContent): SerializableMessageContent;
        fromGenerated(value: SerializableMessageContent): MessageContent;
    };
    static EncryptedMessage: {
        new (): {};
        toGenerated(value: EncryptedMessage): SerializableEncryptedMessage;
        fromGenerated(value: SerializableEncryptedMessage): EncryptedMessage;
    };
    static DecryptorsByCurve: {
        new (): {};
        toGenerated(value: DecryptorsByCurve): SerializableDecryptorsByCurve;
        fromGenerated(value: SerializableDecryptorsByCurve): DecryptorsByCurve;
    };
}
