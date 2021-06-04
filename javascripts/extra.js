var _iub = _iub || [];
_iub.csConfiguration = {
    "consentOnContinuedBrowsing": false,
    "perPurposeConsent": true,
    "whitelabel": false,
    "lang": "en",
    "siteId": 2037233,
    "cookiePolicyId": 43848489,
    "banner": {
        "brandBackgroundColor": "#614b7f",
        "brandTextColor": "#ffffff",
        "acceptButtonDisplay": true,
        "customizeButtonDisplay": true,
        "acceptButtonColor": "rgba(97, 75, 127, 1)",
        "acceptButtonCaptionColor": "white",
        "customizeButtonColor": "#DADADA",
        "customizeButtonCaptionColor": "#4D4D4D",
        "rejectButtonColor": "#0073CE",
        "rejectButtonCaptionColor": "white",
        "closeButtonDisplay": false,
        "position": "float-top-center",
       "textColor": "black",
        "backgroundColor": "#ffffff"
    },
    callback: {
        onReady: function() {
            if (!consentUpdated) {
                // Consent is needed and the user has not expressed his preference yet
                updateConsent(false, false);
            }
        },
        onPreferenceExpressedOrNotNeeded: function(preferences) {
            //pre-blocking
            dataLayer.push({
                iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
            });

            var ad_storage = false;
            var analytics_storage = false;
            if (preferences) {

                // Consent is needed and the user has expressed his preference
                if (preferences.purposes) {
                    analytics_storage = preferences.purposes[4] ?  preferences.purposes[4]:false;
                    ad_storage = preferences.purposes[5]? preferences.purposes[5]:false;
                    //pre-blocking
                    for (var purposeId in preferences.purposes) {
                        if (preferences.purposes[purposeId]) {
                            dataLayer.push({
                                event: "iubenda_consent_given_purpose_" + purposeId
                            });

                        }
                    }
                } else {
                    analytics_storage = ad_storage = preferences.consent;
                    //pre-blocking
                    if (preferences.consent === true) {
                      dataLayer.push({
                        event: "iubenda_consent_given"
                      });
                    analytics_storage = true;
                    ad_storage = true;
                    } else if (preferences.consent === false) {

                    dataLayer.push({
                        event: "iubenda_consent_rejected"
                    });
                   }
                }
                updateConsent(ad_storage, analytics_storage);
            } else {
                //pre-blocking
                dataLayer.push({
                    event: "iubenda_preference_not_needed"
                });
                // Consent is not needed
                updateConsent(true, true);
            }
        }
    }
};
