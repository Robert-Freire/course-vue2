export class NationalityDataService {
    public static getNationalities(): String[] {
        let nationalities: String[] = [];

        nationalities.push('Finland');
        nationalities.push('Canada');

        return nationalities;
    }
}
