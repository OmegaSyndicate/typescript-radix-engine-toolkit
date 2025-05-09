import { AddressDecodeInput, AddressDecodeOutput, AddressEntityTypeInput, AddressEntityTypeOutput, BuildInformationInput, BuildInformationOutput, DeriveBech32mTransactionIdentifierFromIntentHashInput, DeriveBech32mTransactionIdentifierFromIntentHashOutput, DeriveNodeAddressFromPublicKeyInput, DeriveNodeAddressFromPublicKeyOutput, DeriveOlympiaAccountAddressFromPublicKeyInput, DeriveOlympiaAccountAddressFromPublicKeyOutput, DerivePublicKeyFromOlympiaAccountAddressInput, DerivePublicKeyFromOlympiaAccountAddressOutput, DeriveResourceAddressFromOlympiaResourceAddressInput, DeriveResourceAddressFromOlympiaResourceAddressOutput, DeriveVirtualAccountAddressFromOlympiaAccountAddressInput, DeriveVirtualAccountAddressFromOlympiaAccountAddressOutput, DeriveVirtualAccountAddressFromPublicKeyInput, DeriveVirtualAccountAddressFromPublicKeyOutput, DeriveVirtualIdentityAddressFromPublicKeyInput, DeriveVirtualIdentityAddressFromPublicKeyOutput, ExecutionAnalyzeInput, ExecutionAnalyzeOutput, InstructionsCompileInput, InstructionsCompileOutput, InstructionsConvertInput, InstructionsConvertOutput, InstructionsDecompileInput, InstructionsDecompileOutput, InstructionsExtractAddressesInput, InstructionsExtractAddressesOutput, InstructionsHashInput, InstructionsHashOutput, InstructionsStaticallyValidateInput, InstructionsStaticallyValidateOutput, IntentCompileInput, IntentCompileOutput, IntentDecompileInput, IntentDecompileOutput, IntentHashInput, IntentHashOutput, IntentStaticallyValidateInput, IntentStaticallyValidateOutput, ManifestCompileInput, ManifestCompileOutput, ManifestDecompileInput, ManifestDecompileOutput, ManifestHashInput, ManifestHashOutput, ManifestSborDecodeToStringInput, ManifestSborDecodeToStringOutput, ManifestStaticallyValidateInput, ManifestStaticallyValidateOutput, NotarizedTransactionCompileInput, NotarizedTransactionCompileOutput, NotarizedTransactionDecompileInput, NotarizedTransactionDecompileOutput, NotarizedTransactionHashInput, NotarizedTransactionHashOutput, NotarizedTransactionStaticallyValidateInput, NotarizedTransactionStaticallyValidateOutput, ScryptoSborDecodeToStringInput, ScryptoSborDecodeToStringOutput, ScryptoSborEncodeStringRepresentationInput, ScryptoSborEncodeStringRepresentationOutput, SignedIntentCompileInput, SignedIntentCompileOutput, SignedIntentDecompileInput, SignedIntentDecompileOutput, SignedIntentHashInput, SignedIntentHashOutput, SignedIntentStaticallyValidateInput, SignedIntentStaticallyValidateOutput, UtilsKnownAddressesInput, UtilsKnownAddressesOutput } from "../generated";
import { Host } from "./host";
/**
 * A class that extends {@link Host} providing an even higher level API for calling into the Radix
 * Engine Toolkit.
 *
 * {@link Host} has no understanding of the functions that are exported by the Radix Engine Toolkit,
 * all it knows is that it's a WASM that uses a specific serialization format for all communication.
 * This class extends its functionality by providing the concrete structure of the functions WASM
 * exports, how memory is allocated and deallocated.
 */
export declare class RawRadixEngineToolkit extends Host<Exports> {
    buildInformation(input: BuildInformationInput): BuildInformationOutput;
    deriveVirtualAccountAddressFromPublicKey(input: DeriveVirtualAccountAddressFromPublicKeyInput): DeriveVirtualAccountAddressFromPublicKeyOutput;
    deriveVirtualIdentityAddressFromPublicKey(input: DeriveVirtualIdentityAddressFromPublicKeyInput): DeriveVirtualIdentityAddressFromPublicKeyOutput;
    derivePublicKeyFromOlympiaAccountAddress(input: DerivePublicKeyFromOlympiaAccountAddressInput): DerivePublicKeyFromOlympiaAccountAddressOutput;
    deriveVirtualAccountAddressFromOlympiaAccountAddress(input: DeriveVirtualAccountAddressFromOlympiaAccountAddressInput): DeriveVirtualAccountAddressFromOlympiaAccountAddressOutput;
    deriveResourceAddressFromOlympiaResourceAddress(input: DeriveResourceAddressFromOlympiaResourceAddressInput): DeriveResourceAddressFromOlympiaResourceAddressOutput;
    deriveOlympiaAccountAddressFromPublicKey(input: DeriveOlympiaAccountAddressFromPublicKeyInput): DeriveOlympiaAccountAddressFromPublicKeyOutput;
    deriveBech32mTransactionIdentifierFromIntentHash(input: DeriveBech32mTransactionIdentifierFromIntentHashInput): DeriveBech32mTransactionIdentifierFromIntentHashOutput;
    deriveNodeAddressFromPublicKey(input: DeriveNodeAddressFromPublicKeyInput): DeriveNodeAddressFromPublicKeyOutput;
    executionAnalyze(input: ExecutionAnalyzeInput): ExecutionAnalyzeOutput;
    instructionsHash(input: InstructionsHashInput): InstructionsHashOutput;
    instructionsConvert(input: InstructionsConvertInput): InstructionsConvertOutput;
    instructionsCompile(input: InstructionsCompileInput): InstructionsCompileOutput;
    instructionsDecompile(input: InstructionsDecompileInput): InstructionsDecompileOutput;
    instructionsExtractAddresses(input: InstructionsExtractAddressesInput): InstructionsExtractAddressesOutput;
    instructionsStaticallyValidate(input: InstructionsStaticallyValidateInput): InstructionsStaticallyValidateOutput;
    manifestHash(input: ManifestHashInput): ManifestHashOutput;
    manifestCompile(input: ManifestCompileInput): ManifestCompileOutput;
    manifestDecompile(input: ManifestDecompileInput): ManifestDecompileOutput;
    manifestStaticallyValidate(input: ManifestStaticallyValidateInput): ManifestStaticallyValidateOutput;
    intentHash(input: IntentHashInput): IntentHashOutput;
    intentCompile(input: IntentCompileInput): IntentCompileOutput;
    intentDecompile(input: IntentDecompileInput): IntentDecompileOutput;
    intentStaticallyValidate(input: IntentStaticallyValidateInput): IntentStaticallyValidateOutput;
    signedIntentHash(input: SignedIntentHashInput): SignedIntentHashOutput;
    signedIntentCompile(input: SignedIntentCompileInput): SignedIntentCompileOutput;
    signedIntentDecompile(input: SignedIntentDecompileInput): SignedIntentDecompileOutput;
    signedIntentStaticallyValidate(input: SignedIntentStaticallyValidateInput): SignedIntentStaticallyValidateOutput;
    notarizedTransactionHash(input: NotarizedTransactionHashInput): NotarizedTransactionHashOutput;
    notarizedTransactionCompile(input: NotarizedTransactionCompileInput): NotarizedTransactionCompileOutput;
    notarizedTransactionDecompile(input: NotarizedTransactionDecompileInput): NotarizedTransactionDecompileOutput;
    notarizedTransactionStaticallyValidate(input: NotarizedTransactionStaticallyValidateInput): NotarizedTransactionStaticallyValidateOutput;
    manifestSborDecodeToString(input: ManifestSborDecodeToStringInput): ManifestSborDecodeToStringOutput;
    scryptoSborDecodeToString(input: ScryptoSborDecodeToStringInput): ScryptoSborDecodeToStringOutput;
    scryptoSborEncodeStringRepresentation(input: ScryptoSborEncodeStringRepresentationInput): ScryptoSborEncodeStringRepresentationOutput;
    utilsKnownAddresses(input: UtilsKnownAddressesInput): UtilsKnownAddressesOutput;
    addressEntityType(input: AddressEntityTypeInput): AddressEntityTypeOutput;
    addressDecode(input: AddressDecodeInput): AddressDecodeOutput;
    allocateMemory(capacity: number): number;
    deallocateMemory(pointer: number): void;
    memory(): WebAssembly.Memory;
    /**
     * Calls a method on the Radix Engine Toolkit and returns the output from the function invocation.
     *
     * This function is an extension {@link Host<Exports>#callFunction} that adds support for detecting when a
     * function invocation has errored out and throwing an exception in this case with the error that
     * was returned.
     *
     * @param input The input of the Radix Engine Toolkit function.
     * @param fn The Radix Engine Toolkit function to invoke.
     * @returns An object of the generic type {@link O} of the expected output from the function.
     */
    callFunction<O>(input: any, fn: (input: number) => number): O;
    /**
     * Determines if the output of the Radix Engine Toolkit is an error response or not. This is used
     * to determine if the Radix Engine Toolkit should throw an exception or not.
     * @param output The Radix Engine Toolkit output to check if it's an error or not.
     * @returns A boolean indicating whether this is an error response or not.
     */
    private isErrorResponse;
}
/**
 * An interface that defines the the structure of functions and memory exposed by the Radix Engine
 * Toolkit WASM module.
 */
interface Exports {
    memory: WebAssembly.Memory;
    build_information(pointer: number): number;
    derive_virtual_account_address_from_public_key(pointer: number): number;
    derive_virtual_identity_address_from_public_key(pointer: number): number;
    derive_virtual_account_address_from_olympia_account_address(pointer: number): number;
    derive_resource_address_from_olympia_resource_address(pointer: number): number;
    derive_public_key_from_olympia_account_address(pointer: number): number;
    derive_olympia_account_address_from_public_key(pointer: number): number;
    derive_node_address_from_public_key(pointer: number): number;
    derive_bech32m_transaction_identifier_from_intent_hash(pointer: number): number;
    execution_analyze(pointer: number): number;
    instructions_hash(pointer: number): number;
    instructions_convert(pointer: number): number;
    instructions_compile(pointer: number): number;
    instructions_decompile(pointer: number): number;
    instructions_extract_addresses(pointer: number): number;
    instructions_statically_validate(pointer: number): number;
    manifest_hash(pointer: number): number;
    manifest_compile(pointer: number): number;
    manifest_decompile(pointer: number): number;
    manifest_statically_validate(pointer: number): number;
    intent_hash(pointer: number): number;
    intent_compile(pointer: number): number;
    intent_decompile(pointer: number): number;
    intent_statically_validate(pointer: number): number;
    signed_intent_hash(pointer: number): number;
    signed_intent_compile(pointer: number): number;
    signed_intent_decompile(pointer: number): number;
    signed_intent_statically_validate(pointer: number): number;
    notarized_transaction_hash(pointer: number): number;
    notarized_transaction_compile(pointer: number): number;
    notarized_transaction_decompile(pointer: number): number;
    notarized_transaction_statically_validate(pointer: number): number;
    manifest_sbor_decode_to_string(pointer: number): number;
    scrypto_sbor_decode_to_string(pointer: number): number;
    scrypto_sbor_encode_string_representation(pointer: number): number;
    utils_known_addresses(pointer: number): number;
    address_entity_type(pointer: number): number;
    address_decode(pointer: number): number;
    toolkit_alloc(capacity: number): number;
    toolkit_free_c_string(pointer: number): void;
}
export declare const rawRadixEngineToolkit: Promise<RawRadixEngineToolkit>;
export {};
