export interface IMembershipModel {
    Id?: string;
    Email?: string;
    FirstName?: string;
    LastName?: string;
    IsDeleted?: boolean;
    IsDeactivated?: boolean;
    token?: string;
}
