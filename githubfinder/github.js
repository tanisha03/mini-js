class Github{
    constructor(){
        this.client_id='00372338fd21756534bf';
        this.client_secret='746094262d0a0fb8623038d587122b8abfcacf37';
        this.repos_count=5;
        this.repos_sort='creates: asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&cliient_secret=${this.client_secret}`);
        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&cliient_secret=${this.client_secret}`);
        const profile =await profileResponse.json();
        const repos= await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}