import { v4 as uuidV4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("assets")
class Asset {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  image_url: string;

  @Column()
  token_ipfs: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Asset };
