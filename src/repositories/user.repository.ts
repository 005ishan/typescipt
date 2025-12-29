import { UserModel, IUser } from "../models/user.model";

export interface IUserRepository {
  createUser(userData: Partial<IUser>): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser | null>;
  getUserByUsername(username: string): Promise<IUser | null>;
  //Additional
  getUserById(id: String): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[]>;
  updateUser(id: String, updateData: Partial<IUser>): Promise<IUser | null>;
  deleteUserById(id: String): Promise<boolean>;
}
//MongoDB Implementation of UserRepository
export class UserRepository implements IUserRepository {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new UserModel(userData);
    return await user.save();
  }
  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await UserModel.findOne({ email: email });
    return user;
  }
  async getUserByUsername(username: string): Promise<IUser | null> {
    const user = await UserModel.findOne({ username: username });
    return user;
  }
  async getUserById(id: String): Promise<IUser | null> {
    //UserModel.findOne({"_id": id});
    const user = await UserModel.findById(id);
    return user;
  }
  async getAllUsers(): Promise<IUser[]> {
    const users = await UserModel.find();
    return users;
  }
  async updateUser(
    id: String,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
    //UserModel.updateOne({ _id: id }, { $set: updateData });
    const updateUser = await UserModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } //return the updated document
    );
    return updateUser;
  }
  async deleteUserById(id: String): Promise<boolean> {
    //UserModel.deleteOne({ _id: id });
    const result = await UserModel.findByIdAndDelete(id);
    return result ? true : false;
  }
}
