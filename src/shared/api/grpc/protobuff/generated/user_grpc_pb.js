// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_ChangePhoneNumberRequest(arg) {
  if (!(arg instanceof user_pb.ChangePhoneNumberRequest)) {
    throw new Error('Expected argument of type user.ChangePhoneNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ChangePhoneNumberRequest(buffer_arg) {
  return user_pb.ChangePhoneNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ChangeUserRoleRequest(arg) {
  if (!(arg instanceof user_pb.ChangeUserRoleRequest)) {
    throw new Error('Expected argument of type user.ChangeUserRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ChangeUserRoleRequest(buffer_arg) {
  return user_pb.ChangeUserRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type user.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserRequest(buffer_arg) {
  return user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LightVerifyUserRequest(arg) {
  if (!(arg instanceof user_pb.LightVerifyUserRequest)) {
    throw new Error('Expected argument of type user.LightVerifyUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LightVerifyUserRequest(buffer_arg) {
  return user_pb.LightVerifyUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_OrdinaryUpdateUserRequest(arg) {
  if (!(arg instanceof user_pb.OrdinaryUpdateUserRequest)) {
    throw new Error('Expected argument of type user.OrdinaryUpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_OrdinaryUpdateUserRequest(buffer_arg) {
  return user_pb.OrdinaryUpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_TotalResponse(arg) {
  if (!(arg instanceof user_pb.TotalResponse)) {
    throw new Error('Expected argument of type user.TotalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_TotalResponse(buffer_arg) {
  return user_pb.TotalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserDataValidationByAdminRequest(arg) {
  if (!(arg instanceof user_pb.UserDataValidationByAdminRequest)) {
    throw new Error('Expected argument of type user.UserDataValidationByAdminRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserDataValidationByAdminRequest(buffer_arg) {
  return user_pb.UserDataValidationByAdminRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_VerifyUserWithDocsRequest(arg) {
  if (!(arg instanceof user_pb.VerifyUserWithDocsRequest)) {
    throw new Error('Expected argument of type user.VerifyUserWithDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_VerifyUserWithDocsRequest(buffer_arg) {
  return user_pb.VerifyUserWithDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/user.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_CreateUserRequest,
    requestDeserialize: deserialize_user_CreateUserRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  ordinaryUpdateUser: {
    path: '/user.UserService/OrdinaryUpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.OrdinaryUpdateUserRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_OrdinaryUpdateUserRequest,
    requestDeserialize: deserialize_user_OrdinaryUpdateUserRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  changePhoneNumber: {
    path: '/user.UserService/ChangePhoneNumber',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangePhoneNumberRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_ChangePhoneNumberRequest,
    requestDeserialize: deserialize_user_ChangePhoneNumberRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  deleteUser: {
    path: '/user.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_DeleteUserRequest,
    requestDeserialize: deserialize_user_DeleteUserRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  verifyUserWithDocs: {
    path: '/user.UserService/VerifyUserWithDocs',
    requestStream: true,
    responseStream: false,
    requestType: user_pb.VerifyUserWithDocsRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_VerifyUserWithDocsRequest,
    requestDeserialize: deserialize_user_VerifyUserWithDocsRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  lightVerifyUser: {
    path: '/user.UserService/LightVerifyUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LightVerifyUserRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_LightVerifyUserRequest,
    requestDeserialize: deserialize_user_LightVerifyUserRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  changeUserRole: {
    path: '/user.UserService/ChangeUserRole',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ChangeUserRoleRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_ChangeUserRoleRequest,
    requestDeserialize: deserialize_user_ChangeUserRoleRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
  userDataValidationByAdmin: {
    path: '/user.UserService/UserDataValidationByAdmin',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserDataValidationByAdminRequest,
    responseType: user_pb.TotalResponse,
    requestSerialize: serialize_user_UserDataValidationByAdminRequest,
    requestDeserialize: deserialize_user_UserDataValidationByAdminRequest,
    responseSerialize: serialize_user_TotalResponse,
    responseDeserialize: deserialize_user_TotalResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
