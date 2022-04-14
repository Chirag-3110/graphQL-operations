/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      orders {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      orders {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      orders {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      orderNum
      description
      users {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      orderNum
      description
      users {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      orderNum
      description
      users {
        items {
          id
          userID
          orderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserOrderMapping = /* GraphQL */ `
  mutation CreateUserOrderMapping(
    $input: CreateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    createUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        orderNum
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserOrderMapping = /* GraphQL */ `
  mutation UpdateUserOrderMapping(
    $input: UpdateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    updateUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        orderNum
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserOrderMapping = /* GraphQL */ `
  mutation DeleteUserOrderMapping(
    $input: DeleteUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    deleteUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        orderNum
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
