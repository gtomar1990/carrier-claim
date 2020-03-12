
export class CommonPageConstants {

    static get General() {
        return {
            Ascending: "ascending",
            SortAscending: "Sort Ascending",
            SortDescending: "Sort Descending",
            ClearSorting: "Clear Sorting",
            GroupByThisColumn: "Group by This Column",
            Ungroup: "Ungroup",
            UngroupAll: "Ungroup All",
        }
    }

    static get Button() {
        return {
            Create: "Create",
            CreateJob: 'Create Job',
            UpdateJob: 'Update Job',
            Cancel: "Cancel",
            OK: "OK",
            Save: "Save",
            Back: "Back",
            Edit: "Edit",
            Next: "Next",
            Delete: 'Delete',
            Yes: 'Yes',
            No: 'No',
            Apply: 'Apply'
        }
    }

    static get Symbol() {
        return {
            Dollar: "$",
            Percentage: "%",
            Comma: ",",
            GreaterThan: ">",
            LessThan: "<",
        };
    }


    static get operatorSymbol() {
        return {
            Plus: "+",
            Minus: "-",
            Divid: "/",
            Multiply: "*",
            percentage: "%",
        };
    }

    static get Operator() {
        return {
            And: "And",
            Equals: "Equals",
            NotEqual: "Does not equal",
            LessThan: "Is less than",
            GreaterThan: "Is greater than",
            LessThanOrEqual: "Is less than or equal to",
            GreaterThanEqual: "Is greater than or equal to",
            IsBlank: "Is blank",
            NoBlank: "Is not blank",
            IsBetween: "Is between",
            Or: 'Or',
            NotAnd: 'Not And',
            NotOr: 'Not Or',
        };
    }

    static get booleanOption() {
        return {
            AllWithBracket: "(All)",
            All: "All",
            true: "true",
            false: "false",
            cross: 'check-cross-icon',
            tick: 'check-tick-icon'
        };
    }

    static get ColumnName() {
        return {
            Active: 'Active',
            Actions: "Actions",
            SelectAll: 'Select All',
            CompanyID: "Company ID",
            CreatedAt: "Created At",
            CreatedBy: "Created By",
            Id: "Id",
            CapID: 'ID',
            CustodianRef: 'CustodianRef',
            IsActive: "Is Active",
            ModifiedBy: "Modified By",
            ModifiedAt: "Modified At",
            Name: "Name",
            menu: 'Menu',
            ParentSecurityId: "Parent Security Id",
            SecurityTypeID: "Security Type ID",
            CashType: "Cash Type",
            CashTypeId: "Cash Type Id",
            CashTypeColumn: 'CashType',
            EffectiveDate: "Effective Date",
            CurrentFace: "Current Face",
            Delta: "Delta",
            SecurityId: 'Security Id',
            DisplayName: 'Display Name',
            Display: 'Display',
            CompanyIDColumn: "CompanyID",
            CompanyIDColumn2: "CompanyId",
            CreatedAtColumn: "CreatedAt",
            ModifiedAtColumn: "ModifiedAt",
            IsActiveColumn: "IsActive",
            EffectiveDatecolumn: 'EffectiveDate',
            CashTypeIdcolumn: 'CashTypeId',
            Email: "Email",
            SecurityType: "Security Type",
            SecurityName: "Security Name",
            SecID: "ID",
            SecurityID: "Security ID",
            CCY: "CCY",
            ElementName: "Element Name",
            AbsTrancheSeniority: 'Abs Tranche Seniority',
            AbsTrancheSeniorityColumn: 'AbsTrancheSeniority',
            AccrualConvention: 'Accrual Convention',
            VisibleName: 'Visible Name',
        }
    }

    static get Messages() {
        return {
            DeleteMessage: "Are you sure you want to delete",
            DeleteRecordMsg: "Are you sure you want to delete this record?",
            SelectRow: "Please select a row",
            DeleteMsg: 'has been deleted',
        }
    }

    static get DateConstant() {
        return {
            FullFormat: "MM/DD/YYYY HH:mm:SS",
            DateFormat: "MM/DD/YYYY",
            DateSingleDigit: "M/D/YYYY",
            Years: "years",
            Months: "months",
            Days: "days",
            Hours: "hours",
            Minutes: "minutes",
            Seconds: "seconds"
        }
    }


    static get Queries() {
        return {
            DevDatabase: 'Dev Database (SQL)',
            local: 'Local',
            EditSecurity: "select Id as 'SecurityId', * from northpointcore.sec.Security",
            Security: "select top 100 * from northpointcore.sec.Security",
            SecurityFull: "select * from northpointcore.sec.Security",
            secId: 'select id from northpointcore.sec.Security where id = 1',
            Security2: 'select top 500 * from northpointcore.sec.SecurityPivotTable',
            SecurityCondition1: "Select * from northpointcore.sec.Security where Id=1",
            SecurityCondition2: "Select top 100 * from northpointcore.sec.Security where Id= {0} Or Name={1} Or IsActive={2} Or CreatedAt = {3}",
            SecurityConditionId: "Select top 100 * from northpointcore.sec.Security where Id= {0}",
            SecurityConditionName: "Select top 100 * from northpointcore.sec.Security where Name={0}",
            SecurityConditionIsActive: "Select top 100 * from northpointcore.sec.Security where IsActive={0}",
            SecurityConditionCreatedAt: "Select top 100 * from northpointcore.sec.Security where CreatedAt = {0}",
            StoreProcedure1: "cash.getcashbalances",
            QeryDataBrowserEntity: 'select * from northpointcore.sec.Security where Id={0} or CreatedAt={1}',
            LinkedServer: 'cash.getcashbalances',
            StoreProcedure2: 'pricing.GetPrice',
            InValidStoreProcedure: 'cash.GetCashBalance',
            QueryForDecimal: "select * from northpointcore.pnl.Positions_Current",
            securityIDquery: "SELECT [Id] AS SecurityId, [Name], [SecurityTypeID], [CompanyID], [ParentSecurityId], [CreatedAt],[CreatedBy], [ModifiedAt], [ModifiedBy], [IsActive] FROM northpointcore.sec.Security ORDER BY Id DESC",
            DataWarehouseEntity1: 'Analytics.dim.tfAllocation',
            ParameterCondtion1: 'select Id from northpointcore.sec.Security',
            ParameterCondtion2: 'select Name from northpointcore.sec.Security where Id=1',
            ParameterCondtion3: 'select CreatedAt from northpointcore.sec.Security where Id=1',
            ParameterCondtion4: 'select top 10 Id from northpointcore.sec.Security',
            ParameterCondtion5: 'select top 10 Name from northpointcore.sec.Security',
            ParameterCondtion6: 'select top 10 CreatedAt from northpointcore.sec.Security',
            UserIdSecurityCondition: "select * from northpointcore.ref.users where id=1",
            UserIdSecurityCondition2: "select * from northpointcore.ref.users",
            ImportSecurity: 'SELECT * FROM northpointcore.Analytics.intra.tfPosition()',
            DataWarehouseEntity2: 'Analytics.hist.tfPositionMarketValueBaseCustomAttribute',
            DataWarehouseEntity3: 'Analytics.intra.tfPosition',
            queryLargeData: 'select * from northpointcore.pnl.Positions_Historical',
            securityBlotter: 'SELECT  sp.ID as SecurityID, sp.ID, sp.Name SecurityName, sp.InstruDesc, sp.SecurityType, sp.InvestmentType, sp.Status, sp.CompanyId IssuerID, sp.Issuer, sp.ParentSecurityId, sp.CUSIP, sp.ISIN, sp.Ticker, sp.BloombergId, sp.CCY, sp.Maturity, sp.BICSIndustrySector [BICS Sector], sp.GICSIndustryName [GICS Industry Name], sp.RatingSP, sp.RatingMoodys, sp.RatingFitch, sp.RatingComposite FROM [northpointcore].[sec].[vSecurityPivot] sp',
            securityBlotter2: 'SELECT	top 5000 sp.ID as SecurityID, sp.ID, sp.Name SecurityName,  sp.InstruDesc, sp.SecurityType, sp.InvestmentType, sp.Status, sp.CompanyId IssuerID, sp.Issuer, sp.ParentSecurityId, sp.CUSIP, sp.ISIN, sp.Ticker, sp.BloombergId, sp.CCY, sp.Maturity, sp.BICSIndustrySector[BICS Sector], sp.GICSIndustryName[GICS Industry Name], sp.RatingSP, sp.RatingMoodys, sp.RatingFitch, sp.RatingComposite FROM	northpointcore.sec.vSecurityPivot sp'
        }
    }

    static get TestData() {

        return {

            smallText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

            XLongText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
                + "printer took a galley of type and scrambled it to make a type specimen book.It has survived not"
                + "only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                + "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with"
                + " desktop publishing software like Aldus PageMaker including versions of Lorem IpsumIt is a long established fact that a reader"
                + " will be distracted by the readable content of a page when looking at its layout.The point of using"
                + "Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                + "Many desktop publishing packages and web page editors now use.it look like readable English."
                + "Many desktop publishing packages and web page editors now use"

        }
    }

    static get classAttributes() {
        return {
            dxInvalid: "dx-invalid",
            gridBorder: "app-grid-border",
            inactiveCheckbox: "inactive-checkbox",
        }
    }

    static get formatType() {
        return {
            dollar: "Dollar",
            percentage: "Percentage",
            comma: "Comma",
            calendar: "Calendar",
            removeDecimal: "Remove Decimal",
            addDecimal: "Add Decimal",
        }
    }

    static get allignmentType() {
        return {
            left: "Left Alignment",
            center: "Center Alignment",
            right: "Right Alignment",
        }
    }

    static get pinType() {
        return {
            leftPin: "Left Pin",
            rightPin: "Right Pin",
        }
    }

    static get fontStyle() {
        return {
            Bold: "Bold",
            Underline: "Underline",
            Italic: "Italic",
        }
    }
    //this is to get specific class contents 
    static get classContents() {
        return {
            Ascending: "dx-sort-up",
            Descending: "dx-sort-down"
        }
    }

    static get pageNumber() {
        return {
            one: '1',
            two: '2',
            three: '3',
            four: '4',
            five: '5',
            onefifity: '150',
            twentyFive: '50',
            threehundred: '300',
        }
    }

    static get emailURL() {
        return {
            email: 'https://www.mailinator.com/',
            AccountCreationSuccessful: 'Account Creation Successful',
            PasswordResetedSuccessfully: 'Password Reseted Successfully',
        }
    }

    static get icon() {
        return {
            incorporated: 'fab fa-acquisitions-incorporated',
            android: 'fab fa-android',
            borderOuter: "fad fa-border-outer",
            cogs: "fas fa-cogs",
            alarmClock: "fal fa-alarm-clock",
            alignCenter: "far fa-align-center",
            bold: "far fa-bold",
            bringFront: "far fa-bring-front",
            checkSquare: "far fa-check-square",
            checkDouble: "fas fa-check-double",
            checkPie: "fas fa-chart-pie",
            fasfacogs: 'fas fa-cogs',
            shieldalt: 'fas fa-shield-alt'
        }
    }
}