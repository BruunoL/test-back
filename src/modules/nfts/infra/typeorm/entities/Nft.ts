import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Asset } from "../../../../assets/infra/typeorm/entities/Asset";

@Entity("nfts")
class Nft {
  @PrimaryColumn()
  id: string;

  @Column()
  qtd_nfts: number;

  @Column()
  asset_id: string;

  @ManyToOne(() => Asset)
  @JoinColumn({ name: "asset_id" })
  asset: Asset;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Nft };
