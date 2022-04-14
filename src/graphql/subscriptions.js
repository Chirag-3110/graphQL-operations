/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateUserOrderMapping = /* GraphQL */ `
  subscription OnCreateUserOrderMapping {
    onCreateUserOrderMapping {
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
export const onUpdateUserOrderMapping = /* GraphQL */ `
  subscription OnUpdateUserOrderMapping {
    onUpdateUserOrderMapping {
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
export const onDeleteUserOrderMapping = /* GraphQL */ `
  subscription OnDeleteUserOrderMapping {
    onDeleteUserOrderMapping {
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
