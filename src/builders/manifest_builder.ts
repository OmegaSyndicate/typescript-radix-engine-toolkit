// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import {
  Instruction,
  CallFunction,
  CallMethod,
  TakeFromWorktop,
  TakeFromWorktopByAmount,
  TakeFromWorktopByIds,
  ReturnToWorktop,
  AssertWorktopContains,
  AssertWorktopContainsByAmount,
  AssertWorktopContainsByIds,
  PopFromAuthZone,
  PushToAuthZone,
  ClearAuthZone,
  ClearSignatureProofs,
  CreateProofFromAuthZone,
  CreateProofFromAuthZoneByAmount,
  CreateProofFromAuthZoneByIds,
  CreateProofFromBucket,
  CloneProof,
  DropProof,
  DropAllProofs,
  PublishPackage,
  BurnResource,
  RecallResource,
  SetMetadata,
  RemoveMetadata,
  SetPackageRoyaltyConfig,
  SetComponentRoyaltyConfig,
  ClaimPackageRoyalty,
  ClaimComponentRoyalty,
  SetMethodAccessRule,
  MintFungible,
  MintNonFungible,
  MintUuidNonFungible,
  CreateFungibleResource,
  CreateFungibleResourceWithInitialSupply,
  CreateNonFungibleResource,
  CreateNonFungibleResourceWithInitialSupply,
  CreateAccessController,
  CreateIdentity,
  AssertAccessRule,
  CreateValidator,
  CreateAccount,
} from "../models/transaction/instruction";
import { ManifestAstValue } from "../models";
import { blake2b } from "blakejs";

export class ManifestBuilder {
  private instructions: Array<Instruction> = [];
  private idAllocator: SequentialIdAllocator = new SequentialIdAllocator();
  private blobs: Array<Uint8Array> = [];

  constructor(instructions: Array<Instruction> = []) {
    this.instructions = instructions;
  }

  /**
   * An instruction to call a function with the given list of arguments on the given package address
   * and blueprint name.
   * @param packageAddress The address of the package containing the blueprint that contains the
   * desired function. This package address is serialized as the `PackageAddress` variant of the
   * `ManifestAstValue` model.
   * @param blueprintName A string of the name of the blueprint containing the desired function.
   * @param functionName A string of the name of the function to call.
   * @param arguments An optional array of `ManifestAstValue` arguments to call the function with.
   * If this array is empty or is not provided, then the function is called with no arguments.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  callFunction(
    packageAddress: ManifestAstValue.Address,
    blueprintName: ManifestAstValue.String,
    functionName: ManifestAstValue.String,
    args: Array<ManifestAstValue.Any> | null
  ) {
    let instruction = new CallFunction(
      packageAddress,
      blueprintName,
      functionName,
      args
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to call a method with a given name on a given component address with the given
   * list of arguments.
   * @param componentAddress The address of the component which contains the method to be invoked.
   * @param methodName A string of the name of the method to call. his field is serialized as a
   * `String` from the ManifestAstValue model.
   * @param arguments An optional array of `ManifestAstValue` arguments to call the method with. If
   * this array is empty or is not provided, then the method is called with no arguments.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  callMethod(
    componentAddress: ManifestAstValue.Address,
    methodName: ManifestAstValue.String,
    args: Array<ManifestAstValue.Any> | null
  ) {
    let instruction = new CallMethod(componentAddress, methodName, args);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to take the entire amount of a given resource address from the worktop and put
   * it in a bucket.
   * @param resourceAddress The address of the resource to take from the worktop.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  takeFromWorktop(
    resourceAddress: ManifestAstValue.Address,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Bucket
    ) => ManifestBuilder
  ) {
    let bucket = this.idAllocator.newBucket();
    let instruction = new TakeFromWorktop(resourceAddress, bucket);
    this.instructions.push(instruction);
    andThen(this, bucket);
    return this;
  }

  /**
   * An instruction to take the an amount of a given resource address from the worktop and put it in
   * a bucket.
   * @param resourceAddress The address of the resource to take from the worktop.
   * @param amount The amount of the resource to take from the worktop.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  takeFromWorktopByAmount(
    resourceAddress: ManifestAstValue.Address,
    amount: ManifestAstValue.Decimal,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Bucket
    ) => ManifestBuilder
  ) {
    let bucket = this.idAllocator.newBucket();
    let instruction = new TakeFromWorktopByAmount(
      resourceAddress,
      amount,
      bucket
    );
    this.instructions.push(instruction);
    andThen(this, bucket);
    return this;
  }

  /**
   * An instruction to take the a set of non-fungible ids of a given resource address from the
   * worktop and put it in a bucket.
   * @param resourceAddress The address of the resource to take from the worktop.
   * @param ids The non-fungible ids to take from the worktop. This is a set (serialized as a JSON
   * array) of `NonFungibleLocalId`s from the ManifestAstValue model.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  takeFromWorktopByIds(
    resourceAddress: ManifestAstValue.Address,
    ids: Array<ManifestAstValue.NonFungibleLocalId>,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Bucket
    ) => ManifestBuilder
  ) {
    let bucket = this.idAllocator.newBucket();
    let instruction = new TakeFromWorktopByIds(resourceAddress, ids, bucket);
    this.instructions.push(instruction);
    andThen(this, bucket);
    return this;
  }

  /**
   * Returns a bucket of tokens to the worktop.
   * @param bucket The bucket to return to the worktop.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  returnToWorktop(bucket: ManifestAstValue.Bucket) {
    let instruction = new ReturnToWorktop(bucket);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to assert that a given resource exists in the worktop.
   * @param resourceAddress The address of the resource to perform the assertion on.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  assertWorktopContains(resourceAddress: ManifestAstValue.Address) {
    let instruction = new AssertWorktopContains(resourceAddress);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to assert that a specific amount of a specific resource address exists in the
   * worktop.
   * @param resourceAddress The address of the resource to perform the assertion on.
   * @param amount The amount of the resource to assert their existence in the worktop.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  assertWorktopContainsByAmount(
    resourceAddress: ManifestAstValue.Address,
    amount: ManifestAstValue.Decimal
  ) {
    let instruction = new AssertWorktopContainsByAmount(
      resourceAddress,
      amount
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to assert that a set ids of a specific resource address exists in the worktop.
   * @param resourceAddress The address of the resource to perform the assertion on.
   * @param ids The non-fungible ids of the resource to assert their existence in the worktop. This
   * is a set (serialized as a JSON array) of `NonFungibleLocalId`s from the ManifestAstValue model.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  assertWorktopContainsByIds(
    resourceAddress: ManifestAstValue.Address,
    ids: Array<ManifestAstValue.NonFungibleLocalId>
  ) {
    let instruction = new AssertWorktopContainsByIds(resourceAddress, ids);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction which pops a proof from the AuthZone stack and into an identifiable proof
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  popFromAuthZone(
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let proof = this.idAllocator.newProof();
    let instruction = new PopFromAuthZone(proof);
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction that pushes a proof to the auth zone stack.
   * @param proof The proof to push to the auth zone stack.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  pushToAuthZone(proof: ManifestAstValue.Proof) {
    let instruction = new PushToAuthZone(proof);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction which clears the auth zone stack by dropping all of the proofs in that stack.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  clearAuthZone() {
    let instruction = new ClearAuthZone();
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Clears all the proofs of signature virtual badges.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  clearSignatureProofs() {
    let instruction = new ClearSignatureProofs();
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to create a proof of the entire amount of a given resource address from the auth
   * zone.
   * @param resourceAddress The address of the resource to create a proof of.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createProofFromAuthZone(
    resourceAddress: ManifestAstValue.Address,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let proof = this.idAllocator.newProof();
    let instruction = new CreateProofFromAuthZone(resourceAddress, proof);
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction to create a proof of the an amount of a given resource address from the auth
   * zone.
   * @param resourceAddress The address of the resource to create a proof of.
   * @param amount The amount of the resource to create a proof of.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createProofFromAuthZoneByAmount(
    resourceAddress: ManifestAstValue.Address,
    amount: ManifestAstValue.Decimal,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let proof = this.idAllocator.newProof();
    let instruction = new CreateProofFromAuthZoneByAmount(
      resourceAddress,
      amount,
      proof
    );
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction to create a proof of the a set of non-fungible ids of a given resource address
   * from the auth zone.
   * @param resourceAddress The address of the resource to create a proof of.
   * @param ids The non-fungible ids to create a proof of. This is a set (serialized as a JSON
   * array) of `NonFungibleLocalId`s from the ManifestAstValue model.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createProofFromAuthZoneByIds(
    resourceAddress: ManifestAstValue.Address,
    ids: Array<ManifestAstValue.NonFungibleLocalId>,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let proof = this.idAllocator.newProof();
    let instruction = new CreateProofFromAuthZoneByIds(
      resourceAddress,
      ids,
      proof
    );
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction to create a proof given a bucket of some resources
   * @param bucket The bucket of resources to create a proof from.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createProofFromBucket(
    bucket: ManifestAstValue.Bucket,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let proof = this.idAllocator.newProof();
    let instruction = new CreateProofFromBucket(bucket, proof);
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction to clone a proof creating a second proof identical to the original
   * @param proof The original proof, or the proof to be cloned.
   * @param andThen A callback function with the manifest builder and bucket.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  cloneProof(
    proof: ManifestAstValue.Proof,
    andThen: (
      builder: ManifestBuilder,
      bucket: ManifestAstValue.Proof
    ) => ManifestBuilder
  ) {
    let instruction = new CloneProof(proof, proof);
    this.instructions.push(instruction);
    andThen(this, proof);
    return this;
  }

  /**
   * An instruction to drop a proof.
   * @param proof The proof to drop.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  dropProof(proof: ManifestAstValue.Proof) {
    let instruction = new DropProof(proof);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to drop all proofs currently present in the transaction context.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  dropAllProofs() {
    let instruction = new DropAllProofs();
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to publish a package and set it's associated royalty configs, metadata, and
   * access rules.
   * @param code The code of the package. Note that this isn't the code blob or the blob hash, this
   * is the actual code of the package.
   * @param schema The schema of the package. Note that this isn't the schema blob or the blob hash,
   * this is the actual schema of the package.
   * @param royaltyConfig The configurations of the royalty for the package
   * @param metadata The metadata to use for the package
   * @param accessRules The access rules to use for the package.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  publishPackage(
    code: Uint8Array,
    schema: Uint8Array,
    royaltyConfig: ManifestAstValue.Tuple,
    metadata: ManifestAstValue.Map,
    accessRules: ManifestAstValue.Any
  ) {
    let instruction = new PublishPackage(
      new ManifestAstValue.Blob(blake2b(code, undefined, 32)),
      new ManifestAstValue.Blob(blake2b(schema, undefined, 32)),
      royaltyConfig,
      metadata,
      accessRules
    );
    this.instructions.push(instruction);
    this.blobs.push(code);
    this.blobs.push(schema);
    return this;
  }

  /**
   * An instruction to burn a bucket of tokens.
   * @param bucket The bucket of tokens to burn.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  burnResource(bucket: ManifestAstValue.Bucket) {
    let instruction = new BurnResource(bucket);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction ot recall resources from a known vault.
   * @param vaultId The id of the vault of the tokens to recall.
   * @param amount The amount of tokens to recall from the vault.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  recallResource(
    vaultId: ManifestAstValue.Bytes,
    amount: ManifestAstValue.Decimal
  ) {
    let instruction = new RecallResource(vaultId, amount);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to set the metadata on an entity.
   * @param entityAddress The address of the entity to set metadata on. This is a discriminated
   * union of types where it can either be a `ResourceAddress`, `ComponentAddress`, `PackageAddress`
   * or a `ComponentAddress`.
   * @param key A string of the key to set the metadata for.
   * @param value A string of the value to set the metadata for.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  setMetadata(
    entityAddress: ManifestAstValue.Address,
    key: ManifestAstValue.String,
    value: ManifestAstValue.Enum
  ) {
    let instruction = new SetMetadata(entityAddress, key, value);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to set the metadata on an entity.
   * @param entityAddress The address of the entity to set metadata on. This is a discriminated
   * union of types where it can either be a `ResourceAddress`, `ComponentAddress`, `PackageAddress`
   * or a `ComponentAddress`.
   * @param key A string of the key to remove the metadata for.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  removeMetadata(
    entityAddress: ManifestAstValue.Address,
    key: ManifestAstValue.String
  ) {
    let instruction = new RemoveMetadata(entityAddress, key);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to modify the royalties of a package.
   * @param packageAddress The address of the package to set the royalty on.
   * @param royaltyConfig The configurations of the royalty for the package
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  setPackageRoyaltyConfig(
    packageAddress: ManifestAstValue.Address,
    royaltyConfig: ManifestAstValue.Map
  ) {
    let instruction = new SetPackageRoyaltyConfig(
      packageAddress,
      royaltyConfig
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to modify the royalties on a component
   * @param componentAddress The component address of the component to modify royalties for.
   * @param royaltyConfig The royalty config to set on the component. This is an `Enum` from the
   * `ManifestAstValue` model.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  setComponentRoyaltyConfig(
    componentAddress: ManifestAstValue.Address,
    royaltyConfig: ManifestAstValue.Tuple
  ) {
    let instruction = new SetComponentRoyaltyConfig(
      componentAddress,
      royaltyConfig
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to claim royalties of a package
   * @param packageAddress The package address of the package to claim royalties for.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  claimPackageRoyalty(packageAddress: ManifestAstValue.Address) {
    let instruction = new ClaimPackageRoyalty(packageAddress);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to claim royalties of a component
   * @param componentAddress The component address of the component to claim royalties for.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  claimComponentRoyalty(componentAddress: ManifestAstValue.Address) {
    let instruction = new ClaimComponentRoyalty(componentAddress);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to modify the access rules of a method that an entity has.
   * @param entityAddress The entity address of the entity to modify the access rules for.
   * @param key The method key for the method to set the access rule of.
   * @param rule The new access rule to set in-place of the old one.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  setMethodAccessRule(
    entityAddress: ManifestAstValue.Address,
    key: ManifestAstValue.String,
    rule: ManifestAstValue.Enum
  ) {
    let instruction = new SetMethodAccessRule(entityAddress, key, rule);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to mint fungible resources
   * @param resourceAddress The address of the resource to mint tokens of.
   * @param amount The amount of fungible tokens to mint of this resource.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  mintFungible(
    resourceAddress: ManifestAstValue.Address,
    amount: ManifestAstValue.Decimal
  ) {
    let instruction = new MintFungible(resourceAddress, amount);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to mint non-fungibles of a resource
   * @param resourceAddress The address of the resource to mint tokens of.
   * @param entries The non-fungible tokens to mint
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  mintNonFungible(
    resourceAddress: ManifestAstValue.Address,
    entries: ManifestAstValue.Map
  ) {
    let instruction = new MintNonFungible(resourceAddress, entries);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to mint non-fungibles of a non-fungible resource that uses UUID as the type id
   * and perform auto incrimination of ID.
   * @param resourceAddress The address of the resource to mint tokens of.
   * @param entries The non-fungible tokens to mint
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  mintUuidNonFungible(
    resourceAddress: ManifestAstValue.Address,
    entries: ManifestAstValue.Array
  ) {
    let instruction = new MintUuidNonFungible(resourceAddress, entries);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to create a new fungible resource.
   * @param divisibility The divisibility of the resource.
   * @param metadata The metadata to set on the resource
   * @param accessRules The access rules to use for the resource
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createFungibleResource(
    divisibility: ManifestAstValue.U8,
    metadata: ManifestAstValue.Map,
    accessRules: ManifestAstValue.Map
  ) {
    let instruction = new CreateFungibleResource(
      divisibility,
      metadata,
      accessRules
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to create a fungible resource with initial supply
   * @param divisibility The divisibility of the resource.
   * @param metadata The metadata to set on the resource
   * @param accessRules The access rules to use for the resource
   * @param initialSupply A decimal value of the initial supply to mint during resource creation. If
   * present.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createFungibleResourceWithInitialSupply(
    divisibility: ManifestAstValue.U8,
    metadata: ManifestAstValue.Map,
    accessRules: ManifestAstValue.Map,
    initialSupply: ManifestAstValue.Decimal
  ) {
    let instruction = new CreateFungibleResourceWithInitialSupply(
      divisibility,
      metadata,
      accessRules,
      initialSupply
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to create a new non-fungible resource.
   * @param idType The type of the non-fungible id to use for this resource.
   * @param schema The schema that all non-fungibles of this resource must adhere to.
   * @param metadata The metadata to set on the resource
   * @param accessRules The access rules to use for the resource
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createNonFungibleResource(
    idType: ManifestAstValue.Enum,
    schema: ManifestAstValue.Blob,
    metadata: ManifestAstValue.Map,
    accessRules: ManifestAstValue.Map
  ) {
    let instruction = new CreateNonFungibleResource(
      idType,
      schema,
      metadata,
      accessRules
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * An instruction to create a non-fungible resource with an initial supply
   * @param idType The type of the non-fungible id to use for this resource.
   * @param schema The schema that all non-fungibles of this resource must adhere to.
   * @param metadata The metadata to set on the resource
   * @param accessRules The access rules to use for the resource
   * @param initialSupply An optional initial supply for the non-fungible resource being created
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createNonFungibleResourceWithInitialSupply(
    idType: ManifestAstValue.Enum,
    schema: ManifestAstValue.Blob,
    metadata: ManifestAstValue.Map,
    accessRules: ManifestAstValue.Map,
    initialSupply: ManifestAstValue.Any
  ) {
    let instruction = new CreateNonFungibleResourceWithInitialSupply(
      idType,
      schema,
      metadata,
      accessRules,
      initialSupply
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Creates a new access controller native component with the passed set of rules as the current
   * active rule set and the specified timed recovery delay in minutes.
   * @param controlledAsset A bucket of the asset that will be controlled by the access controller
   * @param ruleSet The set of rules to use for the access controller's primary, confirmation, and
   * recovery roles.
   * @param timedRecoveryDelayInMinutes The recovery delay in minutes to use for the access
   * controller
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createAccessController(
    controlledAsset: ManifestAstValue.Bucket,
    ruleSet: ManifestAstValue.Tuple,
    timedRecoveryDelayInMinutes:
      | ManifestAstValue.Some
      | ManifestAstValue.None
      | ManifestAstValue.Enum
  ) {
    let instruction = new CreateAccessController(
      controlledAsset,
      ruleSet,
      timedRecoveryDelayInMinutes
    );
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Creates a new identity native component with the passed access rule.
   * @param accessRule The access rule to protect the identity with
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createIdentity(accessRule: ManifestAstValue.Enum) {
    let instruction = new CreateIdentity(accessRule);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Assert that the given access rule is currently fulfilled by the proofs in the Auth Zone of the
   * transaction
   * @param accessRule The access rule to assert
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  assertAccessRule(accessRule: ManifestAstValue.Enum) {
    let instruction = new AssertAccessRule(accessRule);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Creates a validator given the public key of the owner who controls it
   * @param key The ECDSA Secp256k1 public key of the owner of the validator
   * @param ownerAccessRule The access rule to protect the validator with
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createValidator(
    key: ManifestAstValue.String,
    ownerAccessRule: ManifestAstValue.Enum
  ) {
    let instruction = new CreateValidator(key, ownerAccessRule);
    this.instructions.push(instruction);
    return this;
  }

  /**
   * Creates a new global account component which has the withdraw rule seen in the rule.
   * @param withdrawRule The withdraw rule to associate with the account.
   * @returns A `ManifestBuilder` which the caller can continue chaining calls to.
   */
  createAccount(withdrawRule: ManifestAstValue.Enum) {
    let instruction = new CreateAccount(withdrawRule);
    this.instructions.push(instruction);
    return this;
  }

  // TODO: Add a build function that returns a manifest
}

class SequentialIdAllocator {
  private bucketId: number = 0;
  private proofId: number = 0;

  constructor() {}

  newBucket(): ManifestAstValue.Bucket {
    let bucket = new ManifestAstValue.Bucket(
      new ManifestAstValue.U32(this.bucketId)
    );
    this.bucketId++;
    return bucket;
  }

  newProof(): ManifestAstValue.Proof {
    let proof = new ManifestAstValue.Proof(
      new ManifestAstValue.U32(this.proofId)
    );
    this.proofId++;
    return proof;
  }
}