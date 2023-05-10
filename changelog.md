# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

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

Alpha release of arch3.js

### New feature

#### **arch3-core**

- added the `ArchwayClient` (#18)
- added the `SigningArchwayClient` (#22)
