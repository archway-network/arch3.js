# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## v0.4.0 (2023-06-27)

### New feature

#### **arch3-core**

- added support to create an `SigningArchwayClient` using an
  `HttpBatchClient` (#97)
- added support to create an `ArchwayClient` using an `HttpBatchClient` (#96)

### Changes

#### **arch3-core**

- bump `@cosmjs/*` to `0.31.0` (#95)

### Fixes

#### **arch3-core**

- gracefully handle withdrawing reward contracts when no rewards exist (#91)

## v0.3.1 (2023-06-02)

### Fixes

#### **arch3-core**

- use the type `SigningArchwayClientOptions` for the `options` in all factory
  methods of the `SigningArchwayClient` (#89)

## v0.3.0 (2023-05-30)

### New feature

#### **arch3-core**

- method to `calculateFees` for multiple messages on
  `SigningArchwayClient` (#86)

### Changes

#### **arch3-core**

- deprecated the default `gasPrice` option on `SigningArchwayClient` (#86)

### BREAKING CHANGES

- modified the response of `ArchwayCLient.getEstimateTxFees` to change the
  `estimatedFee` type from `Coin[]` to `StdFee` and moved the `gasLimit`
  into `estimatedFee.gas`

## v0.2.0 (2023-05-17)

### New feature

#### **arch3-core**

- automatically estimate fees before signing (#68)
- add `x/rewards` transactions to `SigningArchwayClient` (#67)
- add `x/rewards` queries to `ArchwayClient` (#58)

#### **arch3-proto**

- generate amino types (#62)
- add protobuf deps (#39)
- generate protobuf clients using telescope (#37)

### Bugs fixed

- release process (#33)

### BREAKING CHANGES

- the package `@cosmjs/cosmwasm-stargate` is not re-exported with
  `@archwayhq/arch-core` anymore

## v0.1.0 (2022-09-23)

### New feature

#### **arch3-core**

- added the `ArchwayClient` (#18)
- added the `SigningArchwayClient` (#22)
- added the `SigningArchwayClient` (#22)
