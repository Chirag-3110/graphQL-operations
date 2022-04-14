/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        isAdmin
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($orderNum: String!) {
    getOrder(orderNum: $orderNum) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $orderNum: String
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      orderNum: $orderNum
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        orderNum
        description
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserOrderMapping = /* GraphQL */ `
  query GetUserOrderMapping($id: ID!) {
    getUserOrderMapping(id: $id) {
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
export const listUserOrderMappings = /* GraphQL */ `
  query ListUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        orderID
        user {
          email
          name
          isAdmin
          createdAt
          updatedAt
        }
        order {
          orderNum
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
