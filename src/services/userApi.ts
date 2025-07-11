import { apiService } from './apiService';

export interface UserNameResponse {
  name: string;
}

export const userApi = {
  // Fetch user name
  async fetchUserName(): Promise<UserNameResponse> {
    try {
      return await apiService.get<UserNameResponse>('/user/name');
    } catch (error) {
      console.error('Error fetching user name:', error);
      throw error;
    }
  },

  // Update user name
  async updateUserName(name: string): Promise<UserNameResponse> {
    try {
      return await apiService.put<UserNameResponse>('/user/name', { name });
    } catch (error) {
      console.error('Error updating user name:', error);
      throw error;
    }
  },

  // Create user
  async createUser(userData: { name: string; email?: string }): Promise<UserNameResponse> {
    try {
      return await apiService.post<UserNameResponse>('/user', userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Delete user
  async deleteUser(userId: string): Promise<void> {
    try {
      return await apiService.delete(`/user/${userId}`);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
};
