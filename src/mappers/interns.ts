import type { InternResponseInterface } from "@/types/intern.interface";
import type { InternInterface } from "@/types/intern.interface";

export const mapInterns = (
  interns: InternResponseInterface[]
): InternInterface[] => {
  return interns.map((intern: InternResponseInterface) => {
    return {
      fullName: `${intern.first_name} ${intern.last_name}`,
      avatar: intern.avatar,
      id: intern.id,
    };
  });
};
