This page lists known issues for Clearly.Hub that are currently being tracked or have recently been resolved.

---

### Issue #HUB-301: Email notifications for task updates occasionally delayed

**Status:** `Monitoring`

**Description:** Some users have reported intermittent delays (ranging from a few minutes to over an hour) in receiving email notifications for task assignments, comments, or status changes. The updates appear correctly within the Hub interface itself.

**Workaround:** Please rely on the in-app notification center for real-time updates. We are working with our email delivery provider to improve delivery times.

---

### Issue #HUB-302: User unable to access specific Project folder despite having 'Editor' role

**Status:** `Investigating`

**Description:** In rare cases, a user assigned the 'Editor' role at the project level may receive an access denied error when trying to open certain sub-folders within that project, even though permissions appear correct in the admin settings.

**Workaround:** Removing the user from the project and re-inviting them sometimes resolves the permission inconsistency. Please contact support if this occurs, providing the user and project details.

---

### Issue #HUB-303: Gantt chart view does not correctly display dependencies for tasks imported via CSV

**Status:** `Fix Planned` (Next Minor Release)

**Description:** When tasks with dependencies are imported using the CSV upload feature, the dependency links may not render correctly on the Gantt chart view, although the dependency data itself is imported. Dependencies created directly in the UI work as expected.

**Workaround:** Manually re-link dependencies in the Gantt view after CSV import, or create tasks directly within the Hub interface.

---

### Issue #HUB-285: Resolved - Two-Factor Authentication (2FA) setup failed for some users after password reset

**Status:** `Resolved` (Deployed 2025-04-15)

**Description:** Users who reset their password sometimes encountered an error loop when attempting to re-enable Two-Factor Authentication immediately afterwards.

**Resolution:** The authentication workflow following a password reset has been corrected. Users should now be able to set up 2FA without issue after resetting their password.