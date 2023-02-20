import { defineStore } from "pinia";
import type {
  InternInterface,
  InternResponseInterface,
} from "@/types/intern.interface";
import axios from "axios";
import { mapInterns } from "@/mappers/interns";
import { ElMessage } from "element-plus";

export type RootState = {
  rawInterns: InternResponseInterface[];
  interns: InternInterface[];
  filteredInterns: InternInterface[];
  editedIntern: InternResponseInterface | undefined;
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
};

const url = "https://reqres.in/api/";
export const useInternsStore = defineStore("interns", {
  state: () =>
    ({
      rawInterns: [],
      interns: [],
      filteredInterns: [],
      editedIntern: {},
      pagination: {},
    } as unknown as RootState),
  actions: {
    async fetchInterns(page: number = 1) {
      try {
        const { data } = await axios.get(`${url}users?page=${page}`);
        this.pagination.page = data.page;
        this.pagination.perPage = data.per_page;
        this.pagination.total = data.total;
        this.pagination.totalPages = data.total_pages;

        this.rawInterns = data.data;
        this.interns = mapInterns(data.data);
        this.filteredInterns = this.interns;
      } catch (e) {
        ElMessage.error("Error occurred");
      }
    },
    async deleteIntern(id: number) {
      try {
        await axios.delete(`${url}${id}`);
        ElMessage.success("Deleted user");
      } catch (e) {
        ElMessage.error("Error occurred");
      }
    },
    filterList(searchQuery: string) {
      this.filteredInterns = this.interns.filter((intern) => {
        return intern.fullName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    },
    async getEditedUser(id: number) {
      this.editedIntern = this.rawInterns.find((intern) => intern.id == id);
    },
    async updateUserDetails(userDetails: Object) {
      const userid = this.editedIntern?.id;
      try {
        await axios.put(`${url}users/${userid}`, userDetails);
        ElMessage.success("User details saved");
      } catch (e) {
        ElMessage.error("Error occurred");
      }
    },
    async createUser(userDetails: Object) {
      try {
        await axios.post(`${url}users`, userDetails);
        ElMessage.success("User created successfully");
      } catch (e) {
        ElMessage.error("Error occurred");
      }
    },
  },
});
