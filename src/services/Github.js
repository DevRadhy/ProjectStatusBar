export const Github = {
  async getIssues(owner, repo) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=all`);
  
    const data = await response.json();
  
    const getIssueState = (state) => {
      const issuesByState = data.filter(issues => issues.state === state);
  
      return issuesByState.length;
    }
  
    const opened = getIssueState('open');
    const closed = getIssueState('closed') || 0;
  
    return {
      opened,
      closed,
    };
  }
};