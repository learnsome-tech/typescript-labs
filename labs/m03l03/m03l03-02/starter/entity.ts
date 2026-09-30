type Identifiable = { readonly id: string };
type Timestamps = {
  readonly createdAt: number;
  updatedAt: number;
};
type TenantScoped = { readonly tenantId: string };

type DatabaseRecord = Identifiable & Timestamps & TenantScoped;

function printRecord(rec: DatabaseRecord): void {
  console.log(`[${rec.tenantId}] Record ${rec.id} created at ${rec.createdAt}`);
}

const item: DatabaseRecord = {
  id: "rec_101",
  createdAt: 1710000000,
  updatedAt: 1710000000,
  tenantId: "org_prime"
};

printRecord(item);
