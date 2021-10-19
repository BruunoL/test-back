import { IRequestAdmin } from "../../dtos/IAdminToken";
import { AdminTokenRepository } from "../../repositories/AdminTokenRepository";
import { AuthenticateAdminUseCase } from "./AuthenticateAdminUseCase";

let authenticateAdminUseCase: AuthenticateAdminUseCase;
let adminTokenRepository: AdminTokenRepository;

describe("Authenticate admin", () => {
  beforeEach(() => {
    adminTokenRepository = new AdminTokenRepository();

    authenticateAdminUseCase = new AuthenticateAdminUseCase(
      adminTokenRepository
    );
  });

  it("should be able to authenticate an admin", async () => {
    const admin: IRequestAdmin = {
      user_admin: "admin",
      password_admin: "admin"
    };

    const result = await authenticateAdminUseCase.execute(admin);

    expect(result).toHaveProperty("token");
  });
});